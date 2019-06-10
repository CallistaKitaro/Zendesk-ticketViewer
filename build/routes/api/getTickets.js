const axios = require('axios');

module.exports = (app) => {
    app.get( '/getTickets', (req, res) => {

		const baseUrl = 'https://callista.zendesk.com/api/v2/tickets.json';	

		axios.get(baseUrl, {
            headers: { 
                'Authorization': 'Basic ',
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.data) 
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
            console.log('err: ', err);
		});

	})
}