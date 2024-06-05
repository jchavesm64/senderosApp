import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import myDataJson from "../screens/ubi.json";
export function Senderos() {

    const [data, setData] = useState(myDataJson);
    const [storedData, setStoredData] = useState("");
    function getStringBytesSize(str) {
        return new Blob([str]).size;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
              await AsyncStorage.setItem("myData", JSON.stringify(data));
                const storedData = await AsyncStorage.getItem("myData");
                setStoredData(storedData);
            } catch (error) {
                console.error("Error retrieving data:", error);
            }
        };
        fetchData();
    }, []);

    const saveData = async () => {
        try {
            await AsyncStorage.setItem("myData", JSON.stringify(data));
            console.log("Data saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <View>
            <Text style={{ textAlign: "center", padding: 100 }}>Senderos</Text>
            <Text>Tamaño de datos guardados: {getStringBytesSize(storedData)/ (1024 * 1024) } mb</Text>

            <Text>Datos cargados: {JSON.stringify(data)}</Text>
            <Button title="Guardar" onPress={saveData} />
            <Text>Datos guardados: {storedData}</Text>
        </View>
    );
}
