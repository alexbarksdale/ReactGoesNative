import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchAPI, results, err] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {err ? <Text>{err}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Bucks' />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
