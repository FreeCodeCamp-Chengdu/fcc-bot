// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBot = require('../../../app/controller/bot');
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    bot: ExportBot;
    home: ExportHome;
  }
}
