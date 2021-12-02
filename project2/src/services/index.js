import axios from 'axios'

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const BASE_URL_toKnow =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/toknow`

export const grabResultsToKnow = async () => {
  const res = await axios.get(BASE_URL_toKnow, config)
  return res.data.records
}

export const postResults = async (body) => {
  const res = await axios.post(BASE_URL_toKnow, { fields: body }, config)
  return res.data
}

export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/toOrder`