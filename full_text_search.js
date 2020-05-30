const axios = require('axios');

axios.get('http://localhost:3000/users?q=yahoo')
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });