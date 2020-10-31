import React, {useEffect, useState} from 'react' ;
import {View, Text, FlatList, Image, StyleSheet} from "react-native";
import yelp from "../api/yelp";


const ResultsShowScreen = (props) => {
    const [result, setResult] = useState(null);
    const id = props.navigation.getParam('id');

    const api = async (id) => {
        await yelp.get(`/${id}`).then(response => {
            console.log("success api resultShow");
            setResult(response.data);
        }).catch(error => {
            console.log("(error api resultShow)", error);
        });
    };

    useEffect(() => {
        api(id);
    }, []);
    console.log('[resultShowScreen :]', result);
    if(!result)
        return null;

    return (
            <View style={{paddingHorizontal : 4}}>
                <Text style={{alignSelf : 'center',fontWeight : 'bold' , color: 'white',position:'absolute', zIndex:3,fontSize:25,textShadowColor: "#000",textShadowOffset: {
                        width: 1,
                        height: 4,
                    },
                    textShadowRadius: 4.65,elevation: 10}} >
                    {result.name}
                </Text>
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={(item)=>{
                        console.log('render Item' ,item);
                        return <Image style={styles.image} source={{uri: item.item }} />
                    }}
                />
            </View>
    );
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginVertical : 2
    }
});
export default ResultsShowScreen;
