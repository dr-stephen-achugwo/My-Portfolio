import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);
  return (
    <MapContainer
      center={[5.488097064926223, 7.036817973372718]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.google.com/maps/@5.4656215,7.0345741,12z">OpenStreetMap</a> contributors'
        url="./screenshots/Screenshot 2022-12-16 at 02-33-12 Google Maps.png"
      />
      <Marker position={[5.488097064926223, 7.036817973372718]}>
        <Popup>Dr Stephen lives here, come over for a cup of coffee 😊</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
