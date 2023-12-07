import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>

      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: 'thistle',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 4,
    borderBottomColor: 'gray',
  },
  list: {
    flex: 1,
    backgroundColor: 'teal',
    paddingTop: 12,
    padding: 16,
  },
});
