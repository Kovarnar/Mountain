import Loader from './Loader';

function ViewData({ dataWeather = {}, isLoadingApi, errorApi }) {
    return (
        <div className='view-data'>
        <h2 className='map-title'>Weather and location data</h2>
        {errorApi && <div className='error-display'><span>{errorApi}</span></div>}
        <div className='wrapper-info-temperature'>
            <div className='wrapper-temperature'>
            {
                isLoadingApi
                ? <Loader />
                : (
                    <>
                    <span>{dataWeather?.name}</span>
                    <span className='temperature'>
                        {dataWeather?.main?.temp || 0} °C
                    </span>
                    </>
                )
            }
            </div>
            {
            (Object.keys(dataWeather).length > 0 && !isLoadingApi) && (
                <div className='wrapper-ul'>
                <ul>
                    {
                    Object.keys(dataWeather?.main).map((elem, i) => {
                        return (<li key={i}>{elem}: {dataWeather?.main[elem]}</li>)
                    })
                    }
                    {
                    Object.keys(dataWeather?.coord).length > 0 && Object.keys(dataWeather?.coord).map((elem, i) => {
                        return (<li key={i} className='coord'>{elem}: {dataWeather?.coord[elem]}</li>)
                    })
                    }
                </ul>
                </div>
            )
            }
        </div>
        </div>
    )
}

export default ViewData;