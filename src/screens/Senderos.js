import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, TextInput } from "react-native";
import useAsyncStorage from "../hooks/useBackup";
import { Icon } from "react-native-elements";

export function Senderos() {
    const [newData, setNewData] = useState("");
    const { data, setData, storeData, getData, removeData, isConnected } = useAsyncStorage("myKey", "");

    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getData();
            if (storedData !== null) {
                setData(storedData);
            }
        };
        fetchData();
    }, [getData, setData]);

    const handleStoreData = () => {
        if (newData !== "") {
            storeData(newData);
            setData(newData);
            setNewData("");
        }
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
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                <Icon
                    name="cloud"
                    type="font-awesome"
                    color={isConnected ? 'green' : 'red'}
                    size={24}
                />
                <Text>Dato almacenado: {data}</Text>
            </View>
            {!isConnected && (
                <View style={{ padding: 10 }}>
                    <Text style={{ color: 'red' }}>Dato almacenado offline: {data}</Text>
                </View>
            )}
            <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
                onChangeText={handleUpdateData}
                value={newData}
                placeholder="Ingresa un nuevo dato"
            />
            <Button title="Guardar dato" onPress={handleStoreData} />
            <Button title="Eliminar dato" onPress={handleRemoveData} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Senderos</Text>
        </ScrollView>
    );
}

