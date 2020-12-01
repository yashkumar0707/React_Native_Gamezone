import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
export default function Home({ navigation }) {
    const pressHandler = () => {
        //navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title="Go to review details" onPress={pressHandler}></Button> */}
            <FlatList data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}></FlatList>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         padding: 24
//     },
//     titleText: {
//         fontFamily: 'nunito-bold',
//         fontSize: 18
//     }
// })