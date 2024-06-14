import React from "react";
import { Text, View, Button } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";

export function ChoiceNumPersons() {
    return (
        <View style={{ flex: 1, backgroundColor: "#1d1d1d", alignItems: 'center' }}>
            <Text style={{ color: "#cacbcb", fontWeight: "bold", fontSize: 36, margin: 10 }}>
                Cantidad de personas
            </Text>
            <Text style={{ color: "#cacbcb", fontWeight: "400", fontSize: 16, margin: 10 }}>
                Seleccione la cantidad de personas que ingresarán a los senderos.
            </Text>
            <View style={{ width: 200 }}>
                <ScrollPicker
                    dataSource={["1", "2", "3", "4", "5", "6"]}
                    selectedIndex={3}
                    renderItem={(data, index) => (
                        <View key={index} style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "#cacbcb", fontWeight: "bold", fontSize: 36 }}>{data}</Text>
                        </View>
                    )}
                    onValueChange={(data, selectedIndex) => {
                        console.log("Selected value: ", data);
                    }}
                    wrapperHeight={180}
                    wrapperBackground="#1d1d1d"
                    itemHeight={60}
                    highlightColor="#0c6d49"
                    highlightBorderWidth={5}
                    style={{ width: '100%' }}
                />
            </View>

            <View style={{ width: "200", alignItems: 'center', justifyContent: 'space-between', flex: 1, display: "flex", flexDirection: "row" }}>
                <Button title="Back" style={{ backgroundColor: "#ffff" }}>
                    {"Back"}
                </Button>
                <Button title="Next">
                    {"Next"}
                </Button>
            </View>
        </View>
    );
}
