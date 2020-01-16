import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;
  router.get('/rooms', controller.bot.getRooms);
  router.get('/message', controller.bot.sayMessage);
  io.of('/').route('init', io.controller.bot.init);
};
