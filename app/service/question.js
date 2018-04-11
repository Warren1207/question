'use strict'

const Service = require('egg').Service;
const configJson = require('./config.json')

class QuestionService extends Service {
    /**查询清单 */
    async query(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/list', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**查询详情 */
    async getInfo(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/list/' + id, {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**查询问题详细信息  */
    async replyList(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/post/list', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: {
                issueId: id
            },
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**查询结案信息 */
    async closeInfo(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/closeInfo/' + id, {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**保存函数 */
    async save(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/save', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }

    /**修改函数 */
    async modify(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/modify', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /*token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }

    /**审核通过 */
    async confirm(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/confirm/' + id, {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**确认结案*/
    async acceptClose(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/acceptClose/' + id, {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**继续提问*/
    async keepQuestion(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/issue/keepQuestion', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            // 参数
            data: payload,
            /**token */
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
}
module.exports = QuestionService;