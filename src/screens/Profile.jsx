import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = ({ navigation, route }) => {
  const { id, name } = route.params;
  return (
    <View style={styles.container}>
      <Text>Welcome {name}</Text>
      <Text style={styles.text}>Profile</Text>
      <Button
        title="search"
        onPress={() => navigation.navigate('Search')}
      ></Button>
    </View>
  );
};

export default Profile;

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
