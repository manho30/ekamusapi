/**
 * @Description : Scraper
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 11/8/2023 11:14
 * @File        : scraper.js
 * @IDE         : WebStorm
 */

const axios = require('axios');
const cheerio = require('cheerio');

const EKAMUS_BASE_URL = 'https://www.ekamus.info/';
const EKAMUS_SEARCH_URL = EKAMUS_BASE_URL + '/index.php?search=查询&srch[adv]=all&srch[by]=d&srch[in]=-1&a=srch&d=1&q=';

/**
 * @Description: Get HTML content from a URL
 * @param query {string} The query string
 * @return {Promise<string>} The HTML content
 */
async function getHtmlContent(query) {
    const url = EKAMUS_SEARCH_URL + query;
    const response = await axios.get(url);
    return response.data;
}

/**
 * @Description: Get the word list from the HTML content
 * @param htmlContent {string} The HTML content
 * @return {Promise<string[]>} The word list
 */
async function getWordList(htmlContent) {
    const $ = cheerio.load(htmlContent);

    const wordList = [];
    $('a[href^="/index.php/term/"]').each((index, element) => {
        const word = $(element).text();
        const url = $(element).attr('href');
        wordList.push({ word, url });
    });
    return wordList;
}

module.exports = {
    getHtmlContent,
    getWordList,
}