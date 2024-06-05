import React from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';

export default function Maps(){
    const {userLocation,errorMsg,setLocation} = useLocation();


    return ( 
        <View> 
            <MapView style={{width: '100%', height: "100%"}} 
            initialRegion={userLocation}>
                <Marker  coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}} >
                <Image source={require('./../../../public/map-icons.png')} style={{width: 26, height: 26, borderRadius: 15}}/>
                </Marker>
                <Polyline
                    coordinates={[
                    { latitude: 9.379102, longitude: -83.691324, },
                    { latitude: 9.379621, longitude: -83.692164},
                    { latitude: 9.379546, longitude: -83.692287},
                    { latitude: 9.378241, longitude: -83.693174},
                    { latitude: 9.378241, longitude: -83.693174},
                    { latitude: 9.377801, longitude: -83.693370},
                    { latitude: 9.377709, longitude: -83.693557},
                    { latitude: 9.377860, longitude: -83.693679},
                    { latitude: 9.378208, longitude: -83.693453},

                  
                    ]}
                    strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                    '#7F0000',
                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                    '#B24112',
                    '#E5845C',
                    '#238C23',
                    '#7F0000',
                    ]}
                    strokeWidth={6}
                />
            </MapView>
        </View> 
      )
}