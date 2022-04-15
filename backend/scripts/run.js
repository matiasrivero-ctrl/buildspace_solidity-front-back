// ? More info about this file here: https://app.buildspace.so/projects/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b/lessons/LEc9263031-fd3e-4af8-8f12-d366099bfe8a
// ? Every time you run a terminal command that starts with npx hardhat you are getting this hre object built on the fly using the hardhat.config.js specified in your code!

const main = async () => {
    /* This will actually compile our contract and generate 
    the necessary files we need to work with our contract 
    under the artifacts directory */
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');

    // Hardhat will create a local Ethereum network for us, but just for this contract.
    const waveContract = await waveContractFactory.deploy();

    // We'll wait until our contract is officially deployed to our local blockchain
    await waveContract.deployed();

    // This will basically give us the address of the deployed contract
    console.log('Contract deployed to: ', waveContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); // ! exit Node process without error
    } catch(error) {
        console.log(error);
        process.exit(1); // ! exit Node process while indicating 'Uncaught Fatal Exception' error
    }

    // ? Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
}

runMain();