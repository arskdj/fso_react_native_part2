import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
    return( 
        <View style={styles.container}>
            <Text> hello world </Text>
            <RepositoryList/>            
        </View>
    );
};

export default Main;