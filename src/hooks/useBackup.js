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

