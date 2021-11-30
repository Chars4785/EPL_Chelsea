/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={{ flex:1, }}
        source={{ uri: `http://localhost:3000` }} 
      />
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <SafeAreaView
    //   style={{flex:1}}
    //   >
    //   <View>
    //     <Text>!!!</Text>
    //   </View>
    //   <WebView 
    //     // source={{ uri: `http://localhost:3000` }} 
    //     source={{ uri: `https://sports.news.naver.com/wfootball/index` }} 
    //     style={{ flex:1 }}
    //   />
    // </SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="뉴스" 
          component={HomeScreen} 
          options={(route)=>({
            tabBarIcon: ()  =>  <Icon name="newspaper-variant-outline" size={20} color={'red'} />
          })}
        />
        <Tab.Screen 
          name="경기" 
          component={SettingsScreen} 
          options={(route)=>({
            tabBarIcon: ()  =>  <Icon name="table-large" size={20} color={'red'} />
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
