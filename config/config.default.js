'use strict';
const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1520910446428_2760';

    config.static = {
        prefix: '/',
        dir: path.join(appInfo.baseDir, 'app/public')
    }

    // add your config here
    config.middleware = ['errorHandler', 'saveSession'];

    config.security = {
        csrf: {
            enable: false,
        }
    };

    return config;
};