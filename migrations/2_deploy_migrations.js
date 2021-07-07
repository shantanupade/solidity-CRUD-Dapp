const Migrations = artifacts.require("crud");

module.exports = function (deployer) {
  deployer.deploy(Migrations,"shantanu");
};
