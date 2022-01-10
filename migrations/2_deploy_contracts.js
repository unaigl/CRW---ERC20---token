const CryptoRocketWar = artifacts.require("CryptoRocketWar");
const FirstPresale = artifacts.require("FirstPresale");


module.exports = async function (deployer) {
  await deployer.deploy(FirstPresale, "0x85732427df4874db73600685072D54b99e72C9cA");
  const firstPresale = await FirstPresale.deployed();

  await deployer.deploy(CryptoRocketWar, "0x85732427df4874db73600685072D54b99e72C9cA", "0xf431dfE517f3d61D30A8c3d3B16d0626FA35615f", firstPresale.address);
  const cryptoRocketWar = await CryptoRocketWar.deployed();

  await firstPresale.setToken(cryptoRocketWar.address, {from: "0x85732427df4874db73600685072D54b99e72C9cA"});

};