const express = require('express');
require('dotenv').config();
var cors = require('cors');

const Web3 = require('web3');
const ABI = require('./farm.json').abi;
const providerUrl = `https://ropsten.infura.io/v3/ff4346f21e494a0ba172abcf5311e7d2`;
var httpProvider = new Web3.providers.HttpProvider(providerUrl);
var web3 = new Web3(httpProvider);
const BN = web3.utils.BN;

const app = express();
const https = require('https');
const port = process.env.API_PORT || 5000;
const host = process.env.API_HOST || "0.0.0.0";

async function getData(pool){
  SmartContract = new web3.eth.Contract(ABI, pool);
  var supply = await SmartContract.methods.totalSupply().call();
  var rewardPerToken = await SmartContract.methods.rewardPerToken().call();
  var duration = await SmartContract.methods.DURATION().call();
  rewardPerToken = web3.utils.fromWei(rewardPerToken);

  supply = web3.utils.fromWei(supply);
  apy = rewardPerToken*(365*24*3600)/duration;
  return {
    name: "",
    staked: supply,
    apy: apy
  };
}

// API calls
app.get('/pools', cors(), async (req, res) => {
  var d1 = await getData(process.env.NEXT_PUBLIC_POOL_CONTRACT);
  var d2 = await getData(process.env.NEXT_PUBLIC_POOL_CONTRACT2);
  res.send({
    "data": [
      d1,
      d1,
      d1,
      d2,
      d1,
    ], "created_time": new Date()});
});

https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'YOUR PASSPHRASE HERE'
}, app)
.listen(3000);
app.listen(port, host, () => console.log(`Listening on port ${port}`));
