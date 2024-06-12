import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const data = [
    { id: '1', title: 'Laguna', description: 'Lorem ipsum dolor', image: require('../utils/laguna.jpeg') },
    { id: '2', title: 'Espejos de agua', description: 'Lorem ipsum dolor', image: require('../utils/laguna.jpeg') },
    { id: '3', title: 'Zompopas', description: 'Lorem ipsum dolor', image: require('../utils/laguna.jpeg') },
    { id: '4', title: 'Árboles de Cedro', description: 'Lorem ipsum dolor', image: require('../utils/laguna.jpeg') },
    { id: '5', title: 'Caña India', description: 'Lorem ipsum dolor', image: require('../utils/laguna.jpeg') },
];

export function Sectores({ route }) {
    const navigation = useNavigation();
    const { trail } = route.params;
    const renderItem = ({ item }) => (
            <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('SectoresInfo', { trail: item })}>
                <Image source={item.image} style={styles.image} />
                <Card.Title>{item.title}</Card.Title>
                <Text style={styles.description}>{item.description}</Text>
                </TouchableOpacity>
            </Card>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Explora nuestros Puntos de interés</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SectoresInfo')}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 24,
        color: 'white',
        marginVertical: 20,
        textAlign: 'center',
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#333',
        borderRadius: 10,
        borderWidth: 0,
        flex: 1,
        marginHorizontal: 5,
        padding: 0,
    },
    image: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    description: {
        color: 'white',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    buttonContainer: {
        backgroundColor: '#32CD32',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
