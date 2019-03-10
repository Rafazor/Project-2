import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SearchResults from "./screens/SearchResultsScreen";

const StackNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen
  },
  Details: {
    screen: DetailsScreen
  },
  SearchResults: {
    screen: SearchResults
  }
});

const StackContainer = createAppContainer(StackNavigator)

const TabNavigator = createBottomTabNavigator({
  Home: StackContainer,
  Settings: SettingsScreen,
});



const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}