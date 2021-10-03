import React, { useEffect, useState } from 'react';
import { Image, FlatList, Pressable , StyleSheet,Text } from 'react-native';
import MovieItem from './MovieItem';
import { Storage } from 'aws-amplify';

import { Category, Movie } from '../src/models';
import { DataStore } from '@aws-amplify/datastore';

interface HomeCategoryProps {
    category: Category,
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;

    const [movies, setMovies] = useState<Movie[]>([]);
    

    useEffect(() => {
        const fetchMovies = async () => {
            const result = (await DataStore.query(Movie))
                                .filter((movie) => movie.categoryID === category.id)
            setMovies(result);
        };

        fetchMovies();
    }, [])

    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={movies}
                renderItem={({item}) => <MovieItem movie={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 100,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default HomeCategory;