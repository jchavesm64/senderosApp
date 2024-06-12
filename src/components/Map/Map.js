import React, { useEffect,useState } from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, Polyline,PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';
import { senderoLaguna,senderoPrincipal,senderoCircuitoAnillo,senderoLup} from './../../util/coordenates.ts';

export default function Maps(){
    const {userLocation,errorMsg,setLocation} = useLocation();
    const [closedLocation, setClosedLocation] = useState(null);

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }
      
      function findClosestLocation(userLocation, locations) {
        let closestLocation;
        let closestDistance = Infinity;
      
        locations.forEach(location => {
          const distance = getDistanceFromLatLonInKm(userLocation.latitude, userLocation.longitude, location.latitude, location.longitude);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestLocation = location;
          }
        });
        setClosedLocation(closestLocation)
        return closestLocation;
      }

    useEffect(() => {
        if(userLocation){
            const closestLocation = findClosestLocation(userLocation, senderoLup);
            console.log('aqui',closestLocation)
        }
    },[userLocation])

    return ( 
        <View> 
            <MapView style={{width: '100%', height: "100%"}} initialRegion={userLocation}
            allGesturesEnabled={true} provider={PROVIDER_GOOGLE} >
                <Marker  coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}} >
                <Image source={require('./../../../public/map-icons.png')} style={{width: 26, height: 26, borderRadius: 15}}/>
                </Marker>
                <Polyline
                    coordinates={senderoLup||[]}
                    strokeColor="blue" 
                    strokeWidth={3}
                />
            </MapView>
        </View> 
      )
}