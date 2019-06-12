import json, requests
from requests.auth import HTTPBasicAuth

from flask import Flask
from flask_restful import Api, Resource, reqparse


with open('./../config.json', 'r') as read:
    configuration_file = json.load(read)

app = Flask(__name__)
api = Api(app)

class Tickets(Resource):
    def get(self):

        allTickets = []

        apiURL = "{}/api/v2/tickets.json?sort_by=id".format(configuration_file['DEFAULT']['BASE_URL'])

        while apiURL :
            response = requests.get(apiURL, auth=HTTPBasicAuth(configuration_file['DEFAULT']['USER_NAME'], configuration_file['DEFAULT']['PASSWORD']))

            if (response.status_code != 200):
                apiURL = None
                result = {
                    "zendesk" : True,
                    "status" : response.status_code,
                    "statusText" : response.reason
                }
                return result

            # taking response, convert to string, then convert it to dict type(json format)
            data = json.loads(response.text)

            # Save all tickets information
            allTickets.append(data['tickets'])

            # Assign new apiURL
            apiURL = data['next_page']

        # Flatten the list of list
        returnTickets = [val for sublist in allTickets for val in sublist]

        result = {
            "status" : 200,
            "data"   : returnTickets
        }

        return result, 200


api.add_resource(Tickets, "/api")
app.run(debug=True)
