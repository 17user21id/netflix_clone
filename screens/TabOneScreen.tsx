import React, { useEffect, useState } from 'react';
import { Image, FlatList , StyleSheet } from 'react-native';
import { DataStore } from 'aws-amplify';

import { Text, View } from '../components/Themed';


import HomeCategory from '../components/HomeCategory';
import { Category } from '../src/models'

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category));

    };
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
        {/* List of categories */}
        <FlatList
            data={categories}
            renderItem={({item}) => <HomeCategory category={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  },
});

export default HomeScreen;