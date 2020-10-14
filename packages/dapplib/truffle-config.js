require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strike rival magic essay include inform front slight'; 
let testAccounts = [
"0x0630bde4c56e55887e3e1b7030f319e187f9029a6872487db6b0a82ec117aad4",
"0x49470131b58bd8ab9c884784546d92e6445a46738cc97a1d0d506cd48b3b4b0e",
"0xbab60858000cfc6bd146568bbaea2ed51cea33ee2035f001897cb3c92cd8f0c8",
"0xd823c8619e189ae9c68f14641b98c133f6382a7dae7a4b8cad3331d524080e30",
"0xab20328c614f4a30efd93ebb19f083b9a37cce245dbabd593cee9634ca4553f3",
"0x18aebf20ce15027cc746a0eed9f4b58486434bb2c8c3b0d3d3764fd4fda6f362",
"0x4c51b1673ab844294813b54d2ee1161adf31dc3250aa274fee1430598e227c4e",
"0x0ddb373f59184257d60d54f200d36e0e88bca779482aa1a46f5a913f4c07329d",
"0xd7d069f83fbc56cb95e6323504e0e884d2d047ef516bf381c46a330ef89e3740",
"0xdb22991aa38db5ab30035f1371a11d9aabb612b9022784dcc6011dec0ee65c8a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
