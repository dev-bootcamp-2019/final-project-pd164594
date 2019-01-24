/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
networks:{
    development:{
	      host:"localhost",
	      port:7545,
	      network_id:'*'
    },
    ropsten:  {
	     network_id: 3,
	     host: "localhost",
	     port:  8545,
	     gas:   2900000
	}
  },
  rinkeby:  {
	provider: function(){
		return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/3f152de5c51d4490b60883598c1d8418');
	},
	 network_id: 4,
	 host: "localhost",
	 port:  8545,
	 gas:   2900000
	},
   rpc: {
		 host: 'localhost',
		 post:8080
   }
};
