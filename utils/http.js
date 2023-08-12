/**
 * @Description : API Response
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 11/8/2023 11:42
 * @File        : http.js
 * @IDE         : WebStorm
 */

/**
 * @Description: Generate an error http
 * @param status
 * @param message
 * @return {{data: string, ok: boolean, status: number}}
 */
const error = (status=404, message='Not found') => {
    return {
        ok: false,
        status: status,
        data: message,
    };
}

/**
 * @Description: Generate a success http
 * @param data
 * @return {{data: *, ok: boolean, status: number}}
 */
const success = (data) => {
    return {
        ok: true,
        status: 200,
        data: data,
    };
}

module.exports = {
    error,
    success
}