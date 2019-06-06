import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import SearchScreen from "./screens/SearchScreen";
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


const AppContainer = createAppContainer(StackContainer);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}