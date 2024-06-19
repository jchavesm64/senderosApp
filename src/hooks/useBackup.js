// //Hooks
// import React, { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import NetInfo from "@react-native-community/netinfo";
// import myDataJson from "../screens/ubi.json";

// export function useBackup() {
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
//         const unsubscribe = NetInfo.addEventListener((state) => {
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
//             setStoredData(""); // Clear the state as well
//             console.log("Data cleared successfully!");
//         } catch (error) {
//             console.error("Error clearing data:", error);
//         }
//     };
//     return {};
// }

import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import React, { useState, useEffect } from "react";

const useAsyncStorage = (key, initialData) => {
    const [isConnected, setIsConnected] = useState(true);
    const [data, setData] = useState(initialData);


    const storeData = async (value) => {
        if (value !== null && value !== undefined) {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error("Error storing data:", e);
            }
        }
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value !== null ? JSON.parse(value) : null;
        } catch (e) {
            console.error("Error retrieving data:", e);
            return null;
        }
    };

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.error("Error removing data:", e);
        }
    };

    useEffect(() => {
        const checkInitialData = async () => {
            const storedData = await getData();
            if (storedData !== null) {
                setData(storedData);
            }
        };

        checkInitialData();

        const unsubscribe = NetInfo.addEventListener((state) => {
            if (state.isConnected) {
                removeData();  
            } else {
                storeData(data);  
            }
            setIsConnected(state.isConnected);
        });

        return () => unsubscribe();
    }, [data, key]);

    return { data, setData, storeData, getData, removeData, isConnected };
};

export default useAsyncStorage;

