import React, {useEffect, useState} from 'react' ;
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import SearchBar from "../components/searchBar/SearchBar";
import yelp from '../api/yelp';
import Results from "../components/Results/Results";


const searchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);


    const Api = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'San Francisco'
                }
            });
            console.log("iskander", response.data.businesses)
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage(error.message);
            console.log("error => ", error);
        }
    }
    useEffect(() => {
        Api().then(r => console.log("hello"));
    }, [])
    const filterResultByPrice = (price) => {
        return results.filter(v => v.price === price);
    }
    return (
        <View style={{marginLeft: 2, flex: 1}} showsVerticalScrollIndicator={false}>
            <SearchBar onTermChange={setTerm} onTermSubmit={Api} term={term} searchApi={Api}/>
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <ScrollView>
                <Results results={filterResultByPrice('$')} title='Cost Effective'/>
                <Results results={filterResultByPrice('$$')} title='Bit Pricier'/>
                <Results results={filterResultByPrice('$$$')} title='Big Spender'/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'red'
    }
});

export default searchScreen;
