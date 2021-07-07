// Initialize Web3
web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

//fetch account from ganache
var account;
web3.eth.getAccounts().then(e => {
account = e[0];
console.log(account);
});

// Set Contract Abi
var contractAbi =[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "updateName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deleteName",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

// Set Contract Address
var contractAddress = '0xd0cAc0435A0272d402912538B129695513485ac8'; 

// Set the Contract
var contract = new  web3.eth.Contract(contractAbi,contractAddress);

//display name
async function getName () {
    contract.methods.getName().call().then((name)=>{
    document.getElementById("name").innerHTML= name;
    });  
}

//update name
async function updateName () {
    console.log(document.getElementById("updateName").value)
    await contract.methods.updateName(document.getElementById("updateName").value).send({from:account});
}

//delete name
function deleteName () {
    contract.methods.deleteName().send({from:account});
}