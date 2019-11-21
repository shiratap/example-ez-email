'use strict';
const EZE = require('ez-email');

const group = ['replacethisEmail@gmail.com'];

const email = {
  message: 'hello from eze!',
  subject: 'EZE message'
};

EZE(group, email);
