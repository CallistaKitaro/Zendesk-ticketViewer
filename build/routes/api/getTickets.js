// Use external config file to get authentication information
require('dotenv').config(); 

const axios = require('axios');

module.exports = (app) => {

    app.get( '/getTickets', ( req, res) => {

		const apiURL = `${process.env.BASE_URL}/api/v2/tickets.json`;	

		axios.get(apiURL, {
            headers: { 
                'Authorization': `Basic ${process.env.AUTHENTICATION}`
            }
        })
        .then(result => 
            res.send({ 
                'status' : result.status,
                'data'   : result.data 
            })
        )
        .catch( err => 
            res.send({
                'status'     : err.response.status,
                'statusText' : err.response.statusText
            })
        )
        
	})
}