# The Apollo Group Registry

## Purpose
* This appliciation was built using Solidity and is meant to be a demostration on how an Ethereum Smart Contract can work as a registry system for multiple uses.  There are often examples in the real world of people faking their credentials. I wanted to create a system where a single entity can publicly show that an individual is publicly credentialed.  There are often cases when people fake degrees and accomplishments.  This is meant to demostrate how a public blockchain can help prove someones identity by creating a domain specific application. This application is credentialling a student who completed a class and their grade. 

### Dependencies
* [Ganache](https://truffleframework.com/ganache) (used as a local test blockchain)
* [Node.js](https://nodejs.org/en/)
* Truffle.  If you have node installed run  `npm install truffle -g`
* [Meta Mask](https://metamask.io/)


### Running the application locally on your machine. 
0. Open project in your IDE and run `npm install`
1. Open Ganache. 
2. After installing Meta Mask - Open you meta mask chrome extension. 
3. Restore your wallet from DEN
4. In Ganache look for you MNEMONIC phrase and paste it in the the box. 
5. After restoring, click the drop down in the top left corner and select Custom RPC. 
6. Paste HTTP://127.0.0.1:7545 for your custom RPC and click save. 
7. Open command line and CD in to your project folder.  
8. Run `truffle compile` , `truffle migrate development` .  This will push your smart contracts to your Ganache (your test blockchain).
9. Run `truffle console` , while in the Truffle console run `Registrar.address`
10. An address with appear in your console, copy this address. 
11. Open your app.js file - paste the address on line 22.  `const Registrar = RegistrarContract.at("0xfb88de099e13c3ed21f80a7a1e49f8caecf10df6")`
12. Finally, open your index.html in the browser and you can start to test your application

* Note that you should keep Ganache open while running the application. Also be sure to be using the browser that you have meta mask installed and connected to Ganache.


### Running the application on the test net. 
1. Run `node server.js`
2. Open localhost:8080 in your browser. 
3. Since only the owner of the contract can post to the registry you will not be able to actually post anything. 
4. I have added a few individuals to my registry for you to test.  Open the "Retrieve from registry" page and check that a few of the students are  `0xf8aE9941B21a446E7d654c8D84168Cc8443a7Fc3`  ,  `0x9afb6d5ab1074b140e28519af0b0b1b66505824b` , `0xf8aE9941B21a446E7d654c8D84168Cc8443a7Fc3`
5. The number of students in the registry is reflected on the home page. 

Built by @Pat Doyle 2019


