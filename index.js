'use strict';
const EZE = require('ez-email');

const group = [process.env.EMAIL];

const email = {
  message: 'An email from EZE :)',
  subject: 'EZE message'
};

EZE(group, email);
