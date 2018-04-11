'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class UserAccessController extends Controller {

    //获取验证码
    async validateCode() {
        const { ctx, service } = this;
        const res = await service.validateCode.makeCapcha();
        ctx.session.validateCode = res.code;
        delete res.code;
        ctx.helper.success({ ctx, res });
    }

    // 用户登入
    async login() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.request.body || {};
        // 调用 Service 进行业务处理
        const res = await service.userAccess.login(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.session.token = res.data.token;
        ctx.status = 200;
    }

    // 用户登出
    async logout() {
        const { ctx, service } = this;
        // 调用 Service 进行业务处理
        await service.userAccess.logout();
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx });
    }

    // 修改密码
    async resetPsw() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.request.body || {};
        // 调用 Service 进行业务处理
        const res = await service.userAccess.resetPsw(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    // 获取用户信息
    async current() {
        const { ctx, service } = this;
        const res = await service.userAccess.current();
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, res });
    }
}

module.exports = UserAccessController;