import axios from 'axios'

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}
//toKnow Exports
export const BASE_URL_toKnow =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/toKnow`

export const grabResultsToKnow = async () => {
  const res = await axios.get(BASE_URL_toKnow, config)
  return res.data.records
}

export const postResultsToKnow = async (body) => {
  const res = await axios.post(BASE_URL_toKnow, { fields: body }, config)
  return res.data
}

//toOrder Exports
export const BASE_URL_toOrder =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/toOrder`

export const grabResultsToOrder = async () => {
  const res = await axios.get(BASE_URL_toOrder, config)
  return res.data.records
}

export const postResultsToOrder = async (body) => {
  const res = await axios.post(BASE_URL_toOrder, { fields: body }, config)
  return res.data
}

//toFix Exports
export const BASE_URL_toFix =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/toFix`

export const grabResultsToFix = async () => {
  const res = await axios.get(BASE_URL_toFix, config)
  return res.data.records
}

export const postResultsToFix = async (body) => {
  const res = await axios.post(BASE_URL_toFix, { fields: body }, config)
  return res.data
}