import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const trails = [
	{
		id: '1',
		title: 'Sendero Laguna Las Garzas',
		description:
			'Este sendero cuenta con 350 metros de distancia, un circuito corto alrededor de la Laguna.',
		image: require('../utils/laguna.jpeg'),
	},
	{
		id: '2',
		title: 'Sendero Los Cedros',
		description:
			'Este sendero cuenta con un recorrido de 1280 metros, con un recorrido para admirar la naturaleza.',
		image: require('../utils/sedro.jpeg'),
	},
	{
		id: '3',
		title: 'Sendero La Cotinga',
		description:
			'Este sendero cuenta con un largo de 1600 metros, un sendero diseñado para ejercitarse temprano por la mañana',
		image: require('../utils/sedro2.jpeg'),
	},
];

export function Senderos() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Explora nuestros Senderos</Text>
			<FlatList
				data={trails}
				keyExtractor={(item) => item.id}
				horizontal
				renderItem={({item}) => (
					<TouchableOpacity onPress={() => navigation.navigate('Sectores', {trail: item})}>
						<View style={styles.card}>
							
						<Image source={item.image} style={styles.cardImage} />
							<View style={styles.cardTextContainer}>
								<Text style={styles.cardTitle}>{item.title}</Text>
								<Text style={styles.cardDescription}>{item.description}</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.flatListContent}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 60,

	},
	headerText: {
		color: 'white',
		fontSize: 24,
		marginBottom: 20,
		textAlign: 'center',
	},
	flatListContent: {
		alignItems: 'center',
	},
	card: {
		marginLeft: 10,
		backgroundColor: '#1c1c1e',
		borderRadius: 10,
		overflow: 'hidden',
		marginRight: 10,
		width: 330, // Aumentado
		height: 260, // Aumentado
		minWidth: 330, // Aumentado
		maxWidth: 330, // Corregido el valor
		maxHeight: 260, // Aumentado
		marginBottom: 70,
	},
	
	cardImage: {
		width: '100%',
		height: 150,
	},
	cardTextContainer: {
		padding: 20,
	},
	cardTitle: {
		color: 'white',
		fontSize: 18,
		marginBottom: 5,
	},
	cardDescription: {
		color: 'grey',
		fontSize: 14,
	},
});
