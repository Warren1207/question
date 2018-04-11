'use strict';

const Controller = require('egg').Controller;

class QuestionController extends Controller {

    //查询问题列表
    async query() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.question.query(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //查询问题详情
    async getInfo() {
        const { ctx, service } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.question.getInfo(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //查询问题答复记录
    async replyList() {
        const { ctx, service } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.question.replyList(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //查詢結案時間
    async closeInfo() {
        const { ctx, service } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.question.closeInfo(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //保存
    async save() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.question.save(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //修改
    async modify() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.question.modify(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

    //审核问题
     async confirm() {
        const { ctx, service } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.question.confirm(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

     //确认结案
     async acceptClose() {
        const { ctx, service } = this;
        // 组装参数
        const id = ctx.query.id;
        // 调用 Service 进行业务处理
        const res = await service.question.acceptClose(id);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }
      //继续提问
      async keepQuestion() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.request.body;
        // 调用 Service 进行业务处理
        const res = await service.question.keepQuestion(payload);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

}

module.exports = QuestionController;