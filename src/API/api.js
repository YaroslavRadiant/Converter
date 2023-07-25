export default function getValutasData() {
  return fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_API_KEY || 'NoAPIKey'}=EUR%2CUSD%2CCZK`
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
      throw err
    })
}
