require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture roast frame ski stool curtain rural unfold guess kangaroo army gas'; 
let testAccounts = [
"0x556754d1c91fe88a4bac95fff52b4146c55510ef24b6711f2adf1115bbfff177",
"0x28bcc1459f6b7ac471d4c1f69a29f969f6b6e661c7a8bc5cea3e738320966159",
"0xa71a800b48e2f86f4dee5d99160e063d33c29b64e368198ade74fbb19765a8f3",
"0x7e7052f8d71da4530c9024e302be7501fe2238dc00041a87d95762c54a76667d",
"0x63ae0dfd8ed3b959bfe97e9a9a2e9f022f6d43fbc4bc7cb51965847adf4938b4",
"0x596641138ad71b48188b0c6c0daf95860ff3d867171f35ffc90db45d7a435aa9",
"0xcdd2343127f7a5097f9b5e6339b1d7241b4e0404b8d41f6ae9a3be1e966d643f",
"0xf9fd6438ec1124d254d87d51cef1f36017b75e2db714a8a5cce4c018ca57af8b",
"0x2b0532fd702e01265c08cf03c29cf9d58608815c81c5feb6094de0fe39edf88e",
"0xbaa30953b051fd3db2f4282dad9a700b702a2d03ff30308144ba28c73b05baad"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


