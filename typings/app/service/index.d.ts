// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBot = require('../../../app/service/bot');

declare module 'egg' {
  interface IService {
    bot: ExportBot;
  }
}
