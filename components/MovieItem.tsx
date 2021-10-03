import React, { useEffect, useState} from 'react'
import { Pressable, Image,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'aws-amplify';

import { Movie } from '../src/models';


const MovieItem = ({ movie }: {movie: Movie}) => {
    const navigation = useNavigation();
    const [imageUrl, setImageUrl] = useState('');

    const onMoviePress = () => {
        navigation.navigate('MovieDetailsScreen', { id: movie.id })
    }

    useEffect(() => {  
        if (movie.poster.startsWith('http')) {
            setImageUrl(movie.poster);
            return;
        }

        Storage.get(movie.poster).then(setImageUrl)
    }, [])

    return (
        <Pressable onPress={onMoviePress}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
        </Pressable>
    )
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


export default MovieItem