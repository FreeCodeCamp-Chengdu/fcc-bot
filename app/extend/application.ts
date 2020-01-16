'use strict';

const { Wechaty } = require('wechaty');
const { PuppetPadplus } = require('wechaty-puppet-padplus');

const token = '...'; // 贡献者需要联系Helen提供token
const puppet = new PuppetPadplus({ token });
const Bot = new Wechaty({
  token,
  puppet,
});

module.exports = {
  Bot,
  rooms: [],
};
