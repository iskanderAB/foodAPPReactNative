import React from 'react' ;
import { View  , Text ,TextInput,  StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background} >
            <Feather style={styles.iconStyle} name="search" size={30} color="black" />
            <TextInput  selectionColor='#000'  style={styles.input} placeholder='Search'/>
        </View>
    );
}

const styles = StyleSheet.create({
    background : {
        backgroundColor : '#d6d6d6',
        height : 50,
        borderRadius : 50,
        width : '90%',
        marginHorizontal : 15,
        flexDirection : 'row',
        margin: 10,
        paddingRight: 20
    },
    input : {
        // borderColor: 'black',
        // borderWidth : 1 ,
        fontSize : 20 ,
        color : '#606060',
        flex : 1,
    },
    iconStyle : {
        alignSelf : 'center',
        marginHorizontal: 15
    }
});

export default SearchBar ;
