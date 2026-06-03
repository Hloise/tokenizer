import { ethers } from "hardhat";


async function standard_functions(name, address) {
  const token = await ethers.getContractAt(name, address)
  console.log(await token.totalSupply())
}

async function main() {
  // Get accounts in env, being the one from the private key in .env here.
  // The extracted signer is the one going to sign and send the transactions, deploy the contract.
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  const Helo42 = await ethers.getContractFactory("Helo42");
  const token = await Helo42.deploy(deployer.address);

  await token.waitForDeployment();

  const address = await token.getAddress();
  await standard_functions('Helo42', address)

  console.log("\n✓ helo42 (h42) deployed!");
  console.log("  Contract address:", address);
  console.log("  Network:         Ethereum Sepolia Testnet");
  console.log("  Explorer:        https://sepolia.etherscan.io/address/" + address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
