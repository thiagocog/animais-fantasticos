export default function fetchBitcoin(url, target) {

  const btcPreco = document.querySelector(target)

  async function fetchBtc() {
    try {
      const btcResponse = await fetch(url)
      const btcJSON = await btcResponse.json()
      btcPreco.innerHTML = (1000 / btcJSON.BRL.sell).toFixed(4)
    } catch(e) {
      console.log(e)
    }
  }

  fetchBtc()
}