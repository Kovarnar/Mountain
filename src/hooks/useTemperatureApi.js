import { useEffect, useState } from 'react'
import { getDataApi } from '../utils/getDataApi'

function useTemperatureApi (positionDefault = [48.16013827853842, 24.499487493380435]) {
    const [dataWeather, setDataWeather] = useState({ latlng: { lat: positionDefault[0], lng: positionDefault[1] }, positionDefault, isLoadingApi: false, errorApi: null })
    useEffect(() => {
        const search = async () => {
            try {
                setDataWeather({ ...dataWeather, isLoadingApi: true, errorApi: null })
                const { data } = await getDataApi([{ key: 'lat', value: dataWeather.latlng.lat }, { key: 'lon', value: dataWeather.latlng.lng }])
                setDataWeather({ ...dataWeather, data, isLoadingApi: false, errorApi: null })
            } catch (error) {
                setDataWeather({ ...dataWeather, isLoadingApi: false, errorApi: error?.message })
            }
        }
        search()
    }, [dataWeather?.latlng])

    return [dataWeather, setDataWeather]
}

export default useTemperatureApi