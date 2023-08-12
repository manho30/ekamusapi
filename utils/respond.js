/**
 * @Description : Respond
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 12/8/2023 11:03
 * @File        : respond.js
 * @IDE         : WebStorm
 */

const http = require('./http');
const parse = require("./parse");
const request = require('./request');

const EKAMUS_BASE_URL = 'https://www.ekamus.info';

/**
 * @Description: Parse the result from the scraper
 * @param result {string[]} The word list
 * @param _ORIGIN_WORD {string} The original word (@deprecated)
 * @return {Promise<{data: *, ok: boolean, status: number}>} The parsed result
 */
async function search_respond(result, _ORIGIN_WORD = '') {
    const data = await result;

    if (data.length === 0) {
        return http.error(404, 'Not Found');
    }

    // find the word index matching the original word
    let index = 0;

    const meanings = [];
    const suggestions = [];

    const res = await request.request(EKAMUS_BASE_URL + data[0].url)

    if (res.ok === false) {
        return http.error(res.status, 'Not Found');
    }

    const $ = res.data

    // extract meanings
    parse.meaning($).forEach(meaning => {
        meanings.push(meaning);
    })

    // extract suggestions
    parse.word($).forEach(suggestion => {
        suggestions.push(suggestion);
    })

    return {
        ok: true,
        status: 200,
        data: {
            word: suggestions,
            meanings: meanings,
        }
    };
}

module.exports = {
    search_respond,
}