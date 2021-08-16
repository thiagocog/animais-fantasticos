export default function initFetchBitcoin() {

  const btcPreco = document.querySelector('.btc-preco')

  async function fetchBtc(url) {
    try {
      const btcResponse = await fetch(url)
      const btcJSON = await btcResponse.json()
      btcPreco.innerHTML = (1000 / btcJSON.BRL.sell).toFixed(4)
    } catch(e) {
      console.log(e)
    }
  }

  fetchBtc('https://blockchain.info/ticker')
}