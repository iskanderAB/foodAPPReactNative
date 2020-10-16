import React, {useState} from 'react' ;
import { View , Text , StyleSheet } from "react-native";
import SearchBar from "../components/searchBar/SearchBar";


const searchScreen = () => {
    const [term , setTerm ] = useState("screen search ");
    return (
         <View>
             <SearchBar onTermChange={setTerm} term={term}/>
             <Text> {term} </Text>
         </View>
    );
}

const styles = StyleSheet.create({

});

export default searchScreen ;
