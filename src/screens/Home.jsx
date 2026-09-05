import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profile from './Profile';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="profile"
        onPress={() =>
          navigation.navigate('Profile', { id: 1, name: 'Naeemullah' })
        }
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
