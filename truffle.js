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
	 provider: new HDWalletProvider(mnemonic, infura),
	 network_id: 4,
	 gas:   4500000
	},
   rpc: {
		 host: 'localhost',
		 post:8080
   }
}

