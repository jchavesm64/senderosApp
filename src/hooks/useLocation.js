import * as Location from "expo-location";
import { useEffect, useState } from "react";

export function useLocation() {
    const [userLocation, setLocation] = useState({
        latitude: 9.380094,
        longitude: -83.69155,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
        }
        const user_location = await Location.getCurrentPositionAsync({});
        const location = {
            latitude: user_location.coords.latitude,
            longitude: user_location.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
        };
        setLocation(location);
        console.log(location);
    };

    useEffect(() => {
        getLocation();
    }, []);

    return { userLocation, errorMsg, getLocation, setLocation };
}
