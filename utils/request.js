/**
 * @Description : Request
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 11/8/2023 14:09
 * @File        : request.js
 * @IDE         : WebStorm
 */

const axios = require('axios');

/**
 * @Description: Axios request
 * @param url {string} The URL
 * @param method {string} The HTTP method
 * @param data {object} The data
 * @param headers {object} The headers
 * @return {Promise<{data: *, ok: boolean, status: number}>} The response
 */
async function request(url, method = 'GET', data = {}, headers = {}) {
    return Promise.resolve(axios({
        url,
        method,
        data,
        headers,
    }))
        .then(response => {
            return {
                ok: true,
                status: response.status,
                data: response.data,
            };
        })
        .catch(error => {
            return {
                ok: false,
                status: error.response.status,
                data: error.response.data,
            };
        });
}

module.exports = {
    request,
}