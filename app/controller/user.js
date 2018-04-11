'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    //登陆查询
    async query() {
        const {
            ctx,
            service
        } = this;
        // 调用 Service 进行业务处理
        const res = await service.user.query();
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //查询单条
    async queryid() {
        const {
            ctx,
            service
        } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.user.queryid(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    /**创建人员 */
    async create() {
        const {
            ctx,
            service
        } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.user.create(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //修改
    async modify() {
        const {
            ctx,
            service
        } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.user.modify(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }
    //删除
    async delete() {
        const {
            ctx,
            service
        } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.user.delete(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }
    //密码重置
    async resetPassword() {
        const {
            ctx,
            service
        } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.user.resetPassword(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }
}

module.exports = UserController;