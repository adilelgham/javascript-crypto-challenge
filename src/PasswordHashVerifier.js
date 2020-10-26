const nacl = require('libsodium-wrappers');

module.exports = async() => {
    await nacl.ready;
    return Object.freeze({
        verify: nacl.crypto_pwhash_str_verify
    });
};