var registrar = artifacts.require("./registrar.sol")

module.exports = function(deployer) {
  deployer.deploy(registrar);
};
