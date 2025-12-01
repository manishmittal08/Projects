const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dogecoin,ethereum&vs_currencies=usd";
let bit=document.querySelector("#bitc");
let doge=document.querySelector("#doge");
let ethe=document.querySelector("#ethe");
fetch(url)
  .then(response => {
    if(response.ok){
        return response.json();
    } else{
        throw new Error(`HTTP Error! status: ${response.status}`);
    }
  })
  .then(data => {
    bit.innerText=`$${data.bitcoin.usd}`;
    doge.innerText=`$${data.dogecoin.usd}`;
    ethe.innerText=`$${data.ethereum.usd}`;
    console.log(`Bitcoin Price: $${data.bitcoin.usd}`);
    console.log(`Dogecoin Price: $${data.dogecoin.usd}`);
    console.log(`Ethereum Price: $${data.ethereum.usd}`);
  })
  .catch(error => console.error('Error:', error));


 bit.value= data.bitcoin.usd;