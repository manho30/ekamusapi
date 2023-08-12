/**
 * @Description : BM
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 11/8/2023 11:02
 * @File        : search.js
 * @IDE         : WebStorm
 */

const express = require('express');
const router = express.Router();

const scraper = require('../utils/scraper');
const http = require('../utils/http');
const respond = require('../utils/respond');

/**
 * Routes handler
 */
router.get('/search', async (req, res) => {
    const {q} = req.query;
    if (!q) {
        res.send(http.error(400, 'Bad Request'));
        return;
    }
    const result = await scraper.getWordList(await scraper.getHtmlContent(q));
    const response = await respond.search_respond(result, q);
    res.send(response);
});

module.exports = router;