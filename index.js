'use strict';

const { exec } = require('child_process');
const ncrypt = {};

ncrypt.decrypt = ({ key, file }) => {
    return new Promise(
        (resolve, reject) => {
            exec(
                `openssl enc -aes-256-cbc -d -a -in ${file} -k ${key}`,
                (err, stdout, stderr) => {
                    if (err || stderr) {
                        reject(`exec error: ${err}`);
                        return;
                    }
                    resolve(stdout);
                }
            );
        }
    );
};

ncrypt.encrypt = ({ key, file }) => {
    return new Promise(
        (resolve, reject) => {
            exec(
                `openssl enc -aes-256-cbc -salt -a -in ${file} -k ${key}`,
                (err, stdout, stderr) => {
                    if (err || stderr) {
                        reject(`exec error: ${err}`);
                        return;
                    }
                    resolve(stdout);
                }
            );
        }
    );
};

module.exports = exports = ncrypt;