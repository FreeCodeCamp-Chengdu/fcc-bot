'use strict';

const Service = require('egg').Service;

class BotService extends Service {
  async getRooms() {
    const { app } = this;
    app.rooms = await app.Bot.Room.findAll(/fcc/i);
  }
  sayMessage(query) {
    const { app } = this;
    const message = query.message;
    const rooms = query.rooms;
    if (rooms === '') {
      app.rooms.forEach(room => {
        room.say(message);
      });
    } else {
      const topics = rooms.split(',');
      topics.forEach(async topic => {
        const _room = await app.Bot.Room.find({ topic });
        _room.say(message);
      });
    }
  }
}
module.exports = BotService;
