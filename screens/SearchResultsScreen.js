import React from 'react';
import {Text, View, FlatList, ScrollView} from "react-native";

import {MOVIE_API_KEY} from "../ENV";

import MovieList from "../components/MovieList";

export default class SearchResultsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('searchText')}  (${navigation.getParam('movieList').totalResults} results)`,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <MovieList movieList={this.props.navigation.getParam("movieList").Search} navigation={this.props.navigation}/>
            </View>
        );
    }
}