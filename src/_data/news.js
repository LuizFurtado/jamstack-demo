require('dotenv').config();

const axios = require('axios');

module.exports = async function getNews() {
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`);
        return response.data;
    }
    catch(err) {
        console.log(err);
    }
}