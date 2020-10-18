import React from 'react' ;
import {View, Image ,Text, StyleSheet ,FlatList} from "react-native";
import ResultsDetail from "../ResultsDetail/ResultsDetails";

 const Results = (props) => {
    return <View>
        <Text style={style.text}> {props.title} </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                    return <ResultsDetail result={item} />
                }
            }
            />
    </View>
}
const style = StyleSheet.create({
    text : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft : 10
    },

});
export default Results ;
