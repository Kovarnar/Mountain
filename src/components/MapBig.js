import { MapContainer, TileLayer, Popup, Marker  } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import iconSvg from "../img/icons/location.svg";

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: iconSvg, 
        iconSize: new L.Point(_iconSize)
    })
}

function MapBig({ positionDefault, onClickPosition, position }) {
    const locations = [
        {
            "name": "Эверест",
            "height": "высота 8849 м",
            "level": "Сложный уровень",
            "location": [27.99032045431265, 86.92461824974451]
        },
        {
            "name": "Килиманджаро",
            "height": "высота 5895 м",
            "level": "Простой уровень",
            "location": [-3.0666531944771, 37.3556701804288]
        },
        {
            "name": "Белуха",
            "height": "высота 4506 м",
            "level": "Средний уровень",
            "location": [49.80794230024254, 86.58987112859384]
        },
        {
            "name": "Эльбрус",
            "height": "высота 5642 м",
            "level": "Средний уровень",
            "location": [43.35413017320315, 42.44730941762425]
        },
        {
            "name": "Казбек",
            "height": "высота 5033 м",
            "level": "Сложный уровень",
            "location": [42.697492329199825, 44.51485582468817]
        },
        {
            "name": "Дыхтау",
            "height": "высота 5204 м",
            "level": "Сложный уровень",
            "location": [43.05921159965519, 43.13421861237815]
        },
        {
            "name": "Говерла",
            "height": "высота 2061 м",
            "level": "Простой уровень",
            "location": [48.160199843311, 24.49999045021102]
        }
    ]
    const handleClick = (e) => {onClickPosition(e.latlng)}

    return (
        <MapContainer 
            center={positionDefault} 
            zoom={4} 
            scrollWheelZoom={false}
            style={{height: '70vh'}}
            onClick={handleClick} 
        > 
            <TileLayer 
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=wAv0Sn9KoTGSgW3yQWaO" 
            />

            {locations.map((el, i) => (
                <Marker position={el.location} icon={GetIcon(40, 40)} key={i}>
                    <Popup>
                        {el.name} <br/>
                        {el.height} <br/>
                        {el.level}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapBig;