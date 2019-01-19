# The Apollo Group Registry

## Purpose
* This appliciation was built using Solidity and is meant to be a demostration on how an Ethereum Smart Contract can work as a registry system for multiple uses. 

### Dependencies
* [Ganache](https://truffleframework.com/ganache) (used as a local test blockchain)
* [Node.js](https://nodejs.org/en/)
* Truffle.  If you have node installed run  `npm install truffle -g`
* [Meta Mask](https://metamask.io/)


### Running the application

1. Open Ganache. 
2. After installing Meta Mask - Open you meta mask chrome extension. 
3. Restore your wallet from DEN
4. In Ganache look for you MNEMONIC phrase and paste it in the the box. 
5. After restoring, click the drop down in the top left corner and select Custom RPC. 
6. Paste HTTP://127.0.0.1:7545 for your custom RPC and click save. 
7. Open command line and CD in to your project folder.  
8. Run `truffle compile` , `truffle migrate` .  This will push your smart contracts to your Ganache (your test blockchain).
9. Run `truffle console` , while in the Truffle console run `Registrar.address`
10. An address with appear in your console, copy this address. 
11. Open your app.js file - paste the address on line 22.  `const Registrar = RegistrarContract.at("0xfb88de099e13c3ed21f80a7a1e49f8caecf10df6")`
12. Finally, open your index.html in the browser and you can start to test your application

* Note that you should keep Ganache open while running the application. Also be sure to be using the browser that you have meta mask installed and connected to Ganache.


Built by @Pat Doyle 2018


