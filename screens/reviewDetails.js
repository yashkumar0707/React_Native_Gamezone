import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, Images } from '../styles/global';
import Card from '../shared/card'
export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack()
    }
    const rating = navigation.getParam('rating')
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                {/* <Text>{navigation.getParam('rating')}</Text> */}
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone Rating:</Text>
                    <Image source={Images.ratings[rating]}></Image>
                </View>
                {/* <Button title="Back to Home" onPress={pressHandler}></Button>*/}
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})