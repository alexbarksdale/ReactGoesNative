import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [err, setErr] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san francisco',
                },
            });
            setResults(res.data.businesses);
        } catch (err) {
            setErr('Something went wrong');
        }
    };

    useEffect(() => {
        searchAPI('Pasta');
    }, []);

    return [searchAPI, results, err];
};
