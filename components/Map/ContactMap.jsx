import { useMEMO } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const ContactMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  return (
    <GoogleMap
      zoom={16}
      center={{ lat: 53.835489, lng: -1.77444 }}
      mapContainerClassName="map-container"
    >
      <MarkerF position={{ lat: 53.835489, lng: -1.77444 }} />
    </GoogleMap>
  );
}
53.835489, -1.774444;
export default ContactMap;
