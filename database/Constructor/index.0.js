"use strict";
const qrcode = require('qrcode-terminal');
const googleImage = require('g-i-s');
const moment= require('moment-timezone');
const fs  = require('fs');
const path = require('path');
const yargs  = require('yargs/yargs');
const yts= require( 'yt-search');
const chalk = require('chalk');
const crypto = require('crypto');
const fetch  = require('node-fetch');
const ggs  = require('google-it');
const axios  = require('axios');
const syntaxerror = require('syntax-error');
const request  = require('request');
const util = require('util');
const ffmpeg = require('fluent-ffmpeg');
const speed  = require('performance-now');
const os = require('os');
const Cfonts = require('cfonts');
const figlet = require('figlet');
const baileys = require ('@adiwajshing/baileys');
const toMs = require('ms');
const qs = require('querystring');
const { spawn, exec, execSync } = require('child_process');
const { title } = require('process');

exports.Functions = class Functions {
constructor() {
this.crypto = crypto;
this.figlet = figlet;
this.toMs = toMs;
this.qs = qs;
this.title = title;
this.qrcode = qrcode;
this.spawn = spawn;
this.execSync = execSync;
this.chalk = chalk;
this.syntaxerror = syntaxerror;
this.Cfonts = Cfonts;
this.os = os;
this.path = path;
this.exec = exec;
this.speed = speed;
this.util = util;
this.ffmpeg = ffmpeg;
this.request = request;
this.axios = axios;
this.ggs = ggs;
this.fetch = fetch;
this.yts = yts;
this.yargs = yargs;
this.path = path;
this.fs = fs;
this.moment = moment;
this.googleImage = googleImage;
this.color = color;
}
 }

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
