import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {
    const mapApiKey = "AIzaSyCXlLmiz6bY7fdkpIf7N8SGmgBk9u5weac";

    const center = useMemo(
        () => ({
            lat: 47.851027500908195,
            lng: 106.78259956441806,
        }),
        []
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: mapApiKey,
    });

    return isLoaded ? (
        <GoogleMap
            center={center}
            zoom={16}
            options={mapOptions}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerClassName="w-screen h-auto aspect-[2.1] -mb-[41px]"
        >
            <MarkerF position={center} />
        </GoogleMap>
    ) : null;
}
