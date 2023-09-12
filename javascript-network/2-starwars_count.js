#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
    if (error){
        console.error(error.message);
    }else if (response.statusCode !== 200){
        console.error(response.statusCode);
    }else {
        try {
            const movie = JSON.parse(body);
            const WedgeAntillesMovies = movie.results.filter((film) =>
                film.characters.includes(characterId));
            console.log(`${WedgeAntillesMovies.length}`);

        }catch(parseError){
            console.error(parseError.message);
        }
    }
});