import React from 'react' ;
import {View, Text,Image,StyleSheet} from "react-native";


const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.details}>{result.rating} Stars , {result.review_count} reviews </Text>
    </View>
}
const styles = StyleSheet.create({
    container : {
        paddingTop : 5 ,
        marginLeft : 15 ,
        // backgroundColor : 'red',
        // borderColor : 'black',
        // borderWidth : 2
    },
    image : {
        width : 250,
        height: 120,
        borderRadius: 6
    },
    name : {
        fontWeight: 'bold'
    },
    details : {
        color : '#666666'
    }
})
export default ResultsDetail ;
