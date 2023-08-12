/**
 * @Description : Parse Data
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 12/8/2023 10:55
 * @File        : parse.js
 * @IDE         : WebStorm
 */

const cheerio = require('cheerio');

/**
 * @Description: Parse the suggestions word
 * @param data
 * @return {*[]}
 */
const word = (data) => {
    const suggestions = [];
    const $ = cheerio.load(data);
    $('div.defn p').each((index, element) => {
        const bm = $(element).text().trim();
        const cn = $(element).find('br')[0].nextSibling.nodeValue.trim();
        suggestions.push({ 'bm': bm.replace(cn, ''), 'cn': cn });
    });

    return suggestions;
}

/**
 * @Description: Parse the meanings
 * @param data
 * @return {*[]}
 */
const meaning = (data) => {
    let sections;
    const matches = [];
    const $ = cheerio.load(data);
    $('div.defn').each((index, element) => {
        sections = $(element).html().split('<p>');

        sections = sections[0].trim().split('<br>');

        // remove 1. 2. 3. .... from the array elements
        sections.forEach((section, index) => {
            sections[index] = section.replace(/\d+\.\s/g, '');
        })
    });
    return sections;
}

/** Export */
module.exports = {
    word,
    meaning
}