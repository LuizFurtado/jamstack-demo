require('dotenv').config();

const axios = require('axios');
const countries = require('./countries.json');

async function getNews(country) {
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&pageSize=5`);
        return {
            "country": country,
            "articles": response.data.articles
        };
    }
    catch(err) {
        console.log(err);
    }
}


module.exports = async function () {
    let newPromises = countries.map(getNews);
    return Promise.all(newPromises)
    .then( newsObjects => {
        console.log('newsObjects', newsObjects);
        return [].concat.apply([], newsObjects);
    });
}