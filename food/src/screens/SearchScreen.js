import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchAPI, results, err] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {err ? <Text>{err}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
