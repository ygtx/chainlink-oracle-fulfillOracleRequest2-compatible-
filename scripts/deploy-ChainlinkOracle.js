require('dotenv').config();

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const ChainlinkOracle = await ethers.getContractFactory("Operator");
    const chainlinkOracle = await ChainlinkOracle.deploy(process.env.LINK_TOKEN_ADDRESS, deployer.address);
    console.log("ChainlinkOracle address:", chainlinkOracle.address);
    return chainlinkOracle;
}
main()
    .then(async (instance) => {
        const [deployer] = await ethers.getSigners();
        await instance.setAuthorizedSenders(
            [process.env.CHAINLINK_NODE_ACCOUNT],
            { from: deployer.address }
        )
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });