'use strict'

const Service = require('egg').Service;
const configJson = require('./config.json')

class UserAccessService extends Service {

    async login(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/login', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
        });
        return result.data;
    }

    async logout() {

    }

    async resetPsw(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/password', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }

    async current() {

        return {};
    }
}

module.exports = UserAccessService;