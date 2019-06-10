// Use external config file to get authentication information
require('dotenv').config(); 

const axios = require('axios');

module.exports = (app) => {

    app.get( '/getTickets', (req, res) => {

		const apiURL = `${process.env.BASE_URL}/api/v2/tickets.json`;	

		axios.get(apiURL, {
            headers: { 
                'Authorization': `Basic ${process.env.AUTHENTICATION}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        // .then(res => res.redirect('/error')) 
        .then(res => res.data) 
		.then(data => {
            // Send requested data to frontend using API
			res.send({ data }); 
		})
		.catch(err => {
            console.log(err);
		});

	})
}