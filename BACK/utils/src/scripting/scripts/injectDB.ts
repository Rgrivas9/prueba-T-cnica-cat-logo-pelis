import data from '../../../data/finalSample.json'

const injectDB = async (): Promise<void> => {
  for (const show of data) {
    await fetch('http://localhost:8080/api/v1/shows', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(show),
    })
  }
  console.log('injected💚💛')
}
export default injectDB
