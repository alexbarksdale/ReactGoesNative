import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

function SearchScreen() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchAPI = async () => {
        const res = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san francisco',
            },
        });
        setResults(res.data.businesses);
    };

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
