import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
<<<<<<< Updated upstream
import { Senderos } from "../screens/Senderos";
import { Rutas } from "../screens/Rutas";
import { Ajustes } from "../screens/Ajustes";
=======
import {Senderos} from "../screens/Senderos";
import {Rutas} from "../screens/Rutas";
import {Ajustes} from "../screens/Ajustes";
import { FormularioNombre } from "../screens/FormularioNombre";
>>>>>>> Stashed changes



const Tab = createBottomTabNavigator();
<<<<<<< Updated upstream

export function AppNavigation() {
    return (
        <Tab.Navigator

        >
            <Tab.Screen name="Senderos" component={Senderos} options={{ title: "Senderos" }} />
            <Tab.Screen name="Rutas" component={Rutas} options={{ title: "Rutas" }} />
            <Tab.Screen name="Ajustes" component={Ajustes} options={{ title: "Ajustes" }} />
        </Tab.Navigator>
    );

}

function TabscreenOptions(route, color, size) {

    let iconName;

    if (route.name === "Senderos") {
=======
 
export function AppNavigation(){ 
    return ( 
        <Tab.Navigator 
        screenOptions={({ route }) => ({ 
            tabBarStyle: { backgroundColor: "#2b2b2b" },
            tabBarActiveTintColor: "#00a680", 
            tabBarInactiveTintColor: "#646464", 
            tabBarIcon: ({ color, size }) => TabscreenOptions(route, color, size),
                })}
            > 
            <Tab.Screen name="Senderos" component={FormularioNombre} options={{title: "Senderos"}}/>
            <Tab.Screen name="Rutas" component={Rutas} options={{title: "Rutas"}}/>
            <Tab.Screen name="Ajustes" component={Ajustes} options={{title: "Ajustes"}}/>
        </Tab.Navigator> 
    ); 
 
} 
 
function TabscreenOptions(route, color, size) { 
 
    let iconName; 
   
    if (route.name==="Senderos") { 
>>>>>>> Stashed changes
        iconName = "compass";
    }
    if (route.name === "Rutas") {
        iconName = "map";
    }
    if (route.name === "Ajustes") {
        iconName = "cogs";
    }

    return (
        <Icon
            type="material-community"
            name={iconName}
            color={color}
            size={size} />
    )

}