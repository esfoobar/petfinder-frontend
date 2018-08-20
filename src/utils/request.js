import 'whatwg-fetch'
const baseUrl = process.env.REACT_APP_API_BASE_URL

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export default function request(url, options) {
  return fetch(baseUrl + url, options)
    .then(checkStatus)
    .then(parseJSON)
}
