import Map from './Map';
import ViewData from './ViewData';
import useTemperatureApi from '../hooks/useTemperatureApi';

function WeatherMap() {
    const [dataWeather, setDataWeather] = useTemperatureApi()

    const handleClickNewPosition = (latlng) => {
        if (!dataWeather.isLoadingApi) setDataWeather({ ...dataWeather, latlng })
    }

    return (
        <div className="wrapper-global">
            <div className="wrapper-map">
                <Map
                positionDefault={dataWeather.positionDefault}
                onClickPosition={handleClickNewPosition}
                position={dataWeather.latlng}
                />
            </div>
            <div className="wrapper-view-data">
                <ViewData
                dataWeather={dataWeather?.data}
                isLoadingApi={dataWeather?.isLoadingApi}
                errorApi={dataWeather?.errorApi}
                />
            </div>
        </div>
    )
}

export default WeatherMap;