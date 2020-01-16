'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async init() {
      const { app } = this;
      await app.Bot.stop();
      app.Bot
        .on('scan', (url, code) => {
          if (!/201|200/.test(String(code))) {
            const loginUrl = url.replace(/\/qrcode\//, '/l/');
            this.ctx.socket.emit('loginUrl', loginUrl);
          }
        })
        .on('login', user => {
          this.ctx.socket.emit('login');
          console.log(`${user} login`);
        })
        .on('ready', async () => {
          const rooms = await this.getRooms();
          app.rooms = rooms;
          this.ctx.socket.emit('rooms', rooms);
        })
        .start();
    }
    getRooms() {
      const { app } = this;
      return app.Bot.Room.findAll(/test/i);
    }
  }
  return Controller;
};
