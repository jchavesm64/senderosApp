// import React, { useState, useEffect } from "react";
// import { View, Text, Button, ScrollView } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import NetInfo from "@react-native-community/netinfo";

// import myDataJson from "../screens/ubi.json";

 const StoredDataDisplay = ({ storedData }) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Datos guardados:</Text>
            <Text style={{ fontSize: 16 }}>{JSON.stringify(storedData, null, 2)}</Text>
        </View>
    );
};

// export function Senderos() {
//     const [data, setData] = useState(myDataJson);
//     const [storedData, setStoredData] = useState("");
//     const [isConnected, setIsConnected] = useState(true);

//     function getStringBytesSize(str) {
//         return new Blob([str]).size;
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 await AsyncStorage.setItem("myData", JSON.stringify(data));
//                 const storedData = await AsyncStorage.getItem("myData");
//                 setStoredData(storedData ? JSON.parse(storedData) : "");
//             } catch (error) {
//                 console.error("Error retrieving data:", error);
//             }
//         };
//         fetchData();
//     }, [data]);

//     useEffect(() => {
//         const unsubscribe = NetInfo.addEventListener(state => {
//             if (state.isConnected) {
//                 // Hay conexión a Internet, elimina los datos guardados y actualiza los datos cargados
//                 clearData();
//                 setData(myDataJson); // Actualiza los datos cargados con el contenido de ubi.json
//             } else {
//                 // No hay conexión a Internet, guarda los datos y actualiza el estado
//                 saveData();
//                 setStoredData(data);
//             }
//             setIsConnected(state.isConnected);
//         });

//         return () => unsubscribe();
//     }, [data]);

//     const saveData = async () => {
//         try {
//             await AsyncStorage.setItem("myData", JSON.stringify(data));
//             console.log("Data saved successfully!");
//         } catch (error) {
//             console.error("Error saving data:", error);
//         }
//     };

//     const clearData = async () => {
//         try {
//             await AsyncStorage.removeItem("myData");
//             setStoredData("");  // Clear the state as well
//             console.log("Data cleared successfully!");
//         } catch (error) {
//             console.error("Error clearing data:", error);
//         }
//     };

//     return (
//         <ScrollView style={{ flex: 1, padding: 20 }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
//                 <Icon
//                     name="cloud"
//                     type="font-awesome"
//                     color={isConnected ? 'green' : 'red'}
//                     size={24}
//                 />
//             </View>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Senderos</Text>
//             <Text>Tamaño de datos guardados: {(getStringBytesSize(JSON.stringify(storedData)) / (1024 * 1024)).toFixed(2)} MB</Text>
//             <Text style={{ fontSize: 16 }}>Datos cargados: {JSON.stringify(data, null, 2)}</Text>
//             <Button title="Guardar" onPress={saveData} />
//             <Button title="Eliminar datos cargados" onPress={clearData} />
//             <StoredDataDisplay storedData={storedData} />
//         </ScrollView>
//     );
// }
import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, TextInput } from "react-native";
import useAsyncStorage from "../hooks/useBackup";
import { Icon } from "react-native-elements";

export function Senderos() {
    const [data, setData] = useState("");
    const [newData, setNewData] = useState("");
    const { storeData, getData, removeData, isConnected } = useAsyncStorage("myKey");

    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getData();
            if (storedData !== null) {
                setData(storedData);
                
            }
        };
        fetchData();
    }, [getData]);

    const handleStoreData = () => {
        storeData(newData);
        setData(newData);
        setNewData("");
    };

    const handleRemoveData = () => {
        removeData();
        setData("");
        setNewData("");
    };

    const handleUpdateData = (text) => {
        setNewData(text);
    };

    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            
            
            <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 10 }}>
            <Icon
                    name="cloud"
                    type="font-awesome"
                    color={isConnected ? 'green' : 'red'}
                    size={24}
                />
                <Text>Dato almacenado: {data}</Text>
            </View>
            <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }} onChangeText={handleUpdateData} value={newData} placeholder="Ingresa un nuevo dato" />
            <Button title="Guardar dato" onPress={handleStoreData} />
            <Button title="Eliminar dato" onPress={handleRemoveData} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Senderos</Text>
        </ScrollView>
    );
}
