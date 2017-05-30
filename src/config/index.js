import dotenv from 'dotenv';
import _ from 'lodash';

// load .env file
dotenv.config();

// merge config
const defaultConfig = require('./default');
const envConfig = require('./' + (process.env.NODE_ENV || 'development'));
const config = _.merge({}, defaultConfig.default, envConfig.default);

// function to get config values
export default key => {
    if (!key) {
        return config;
    }
    const keyParts = key.split('.');
    var value = config;
    keyParts.forEach(keyPart => {
        if (!(keyPart in value)) {
            throw new Error('Config key "' + key + '" not found');
        }
        value = value[keyPart];
    });
    return value;
};
