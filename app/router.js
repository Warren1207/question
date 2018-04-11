'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', controller.home.index);

    // userAccess
    router.get('/user/access/validateCode', controller.userAccess.validateCode)
    router.post('/user/access/login', controller.userAccess.login)
    router.get('/user/access/current', controller.userAccess.current)
    router.get('/user/access/logout', controller.userAccess.logout)
    router.post('/user/access/resetPsw', controller.userAccess.resetPsw)

    // question
    /**登陆查询 */
    router.post('/question/query', controller.question.query)
        /**查看请求 */
    router.get('/question/getInfo', controller.question.getInfo)
        /**查询回复清单 */
    router.get('/question/replyList', controller.question.replyList)
        /**查询回复时间 */
    router.get('/question/closeInfo', controller.question.closeInfo)
        /**新增 */
    router.post('/question/save', controller.question.save)
        /**修改问题 */
    router.post('/question/modify', controller.question.modify)
        /**审核问题 */
    router.get('/question/confirm', controller.question.confirm)
        /**确认结案 */
    router.get('/question/acceptClose', controller.question.acceptClose)
        /**继续提问 */
    router.post('/question/keepQuestion', controller.question.keepQuestion)

    //账户管理
    /**登陆查询 */
    router.get('/user/query', controller.user.query)
        /**单条查询 */
    router.get('/user/queryid', controller.user.queryid)
        /**人员创建 */
    router.post('/user/create', controller.user.create)
        /**修改人员 */
    router.post('/user/modify', controller.user.modify)
        /**删除人员 */
    router.get('/user/delete', controller.user.delete)
        /**密码重置 */
    router.post('/user/resetPassword', controller.user.resetPassword)


};