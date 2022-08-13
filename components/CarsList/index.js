import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import cars from "./cars";
import styles from './styles';
import CarItem from "../CarItem";

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CarsList;
