import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {SenderosStack} from "./SenderosStack";
import {Rutas} from "../screens/Rutas";
import {Ajustes} from "../screens/Ajustes";
import { Emergency } from "../screens/Emergency";
import React, { createContext, useContext, useState } from 'react';

export const EmergencyStateContext = createContext();

const Tab = createBottomTabNavigator();
 
export function AppNavigation() { 
    return ( 
        <>
            <Tab.Navigator screenOptions={({ route }) => ({ 
                tabBarActiveTintColor: "#00a680", 
                tabBarInactiveTintColor: "#646464", 
                tabBarIcon: ({ color, size }) =>  TabscreenOptions(route, color, size)
            })}> 
                <Tab.Screen name="Senderos" component={SenderosStack} options={{ title: "Senderos" }}/>
                <Tab.Screen name="Rutas" component={Rutas} options={{ title: "Rutas" }}/>
                <Tab.Screen name="Ajustes" component={Ajustes} options={{ title: "Ajustes" }}/>
            </Tab.Navigator> 
        </>
    ); 
}  
 
function TabscreenOptions(route, color, size) { 
 
    let iconName; 
   
    if (route.name==="Senderos") { 
        iconName = "compass";
    }
    if (route.name==="Rutas") { 
        iconName = "map";
    }
    if (route.name==="Ajustes") { 
        iconName = "cogs";
    }
 
    return ( 
        <Icon  
              type="material-community" 
           name={iconName} 
           color={color} 
           size={size}/> 
    ) 
 
}