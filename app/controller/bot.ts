'use strict';

const Controller = require('egg').Controller;

class BotController extends Controller {

  async getRooms() {
    const { app, ctx } = this;
    if (app.rooms.length > 0) {
      ctx.body = app.rooms;
    } else {
      ctx.body = '请登录后在获取群列表';
    }
  }
  async sayMessage() {
    const { ctx, service } = this;
    await service.bot.sayMessage(ctx.request.query);
    ctx.body = 'success';
  }


}

module.exports = BotController;
