import { MapContainer, TileLayer, Popup, Marker  } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import '../sass/layouts/MyMap.scss';
import iconSvg from "../img/icons/location.svg";

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: iconSvg, 
        iconSize: new L.Point(_iconSize)
    })
}

function MyMap() {
    const center = [49.996999148817785, 36.23309342217281];

    return (
        <MapContainer 
            center={center}
            zoom={14}
            scrollWheelZoom={false}
            className='maps'
        > 
            <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=wAv0Sn9KoTGSgW3yQWaO"
            />
            <Marker position={center} icon={GetIcon(40, 40)}>
                <Popup>
                    Добро пожаловать<br/>в наш офис!
                </Popup>
            </Marker>
            
        </MapContainer>
    );
}

export default MyMap;