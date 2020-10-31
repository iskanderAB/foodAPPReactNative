import React from 'react' ;
import {View, Image, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultsDetail from "../ResultsDetail/ResultsDetails";
import {withNavigation} from "react-navigation";

const Results = (props) => {
    console.log("iskanderAB ==> " ,  props.navigation);
    return <View>
        <Text style={style.text}> {props.title} </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <TouchableOpacity  onPress={()=> props.navigation.navigate('ResultsShow',{id : item.id})} >
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
            }
            }
        />
    </View>
};
const style = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },

});
export default withNavigation(Results);
