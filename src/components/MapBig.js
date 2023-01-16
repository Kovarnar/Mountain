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
            "location": [27.99032045431265, 86.92461824974451]
        },
        {
            "name": "Килиманджаро",
            "location": [-3.0666531944771, 37.3556701804288]
        },
        {
            "name": "Белуха",
            "location": [49.80794230024254, 86.58987112859384]
        },
        {
            "name": "Эльбрус",
            "location": [43.35413017320315, 42.44730941762425]
        },
        {
            "name": "Казбек",
            "location": [42.697492329199825, 44.51485582468817]
        },
        {
            "name": "Дыхтау",
            "location": [43.05921159965519, 43.13421861237815]
        },
        {
            "name": "Говерла",
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

            {locations.map((el) => (
                <Marker position={el.location} icon={GetIcon(40, 40)}>
                    <Popup>
                        {el.name}
                    </Popup>
                </Marker>
            ))}

            {/* <Marker position={position} icon={GetIcon(40, 40)} >
                <Popup>This is your marker</Popup>
            </Marker> */}

        </MapContainer>
    );
}

export default MapBig;