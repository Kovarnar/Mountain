import axios from 'axios'
import credentials from '../config'   // API

export const getDataApi = async (QUERY = [{ key: 'q', value: 'bogota' }]) => {
    const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?appid=${credentials?.apiKeyOpenWeather}&units=metric`
    // const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?${PARAMS}&appid=${credentials}`
    console.log(URL_BASE)
    const PARAMS = QUERY.reduce((acum, elem) => `${acum}${elem?.key && elem?.value ? `&${elem.key}=${elem.value}` : ''}`, '')
    console.log(PARAMS)
    return axios.get(`${URL_BASE}${PARAMS}`)
}