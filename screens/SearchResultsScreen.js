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
            movieList: this.props.navigation.getParam("movieList").Search,
            page: 1
        }
    }



    getMoreResults = async () => {
        try {
            let response = await fetch(
                'http://www.omdbapi.com/?apikey=' + MOVIE_API_KEY +'&s=' + this.props.navigation.getParam("searchText") + '&page=' + this.state.page + 1,
            );
            let responseJson = await response.json();
            this.setState((prevState) => ({
                movieList: [...prevState.movieList, ...responseJson.Search],
                page: prevState.page + 1
            }))

        } catch (error) {
            console.error(error);
        }
    };

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <MovieList
                    movieList={this.state.movieList}
                    navigation={this.props.navigation}
                    getMoreResults={this.getMoreResults}
                />
            </View>
        );
    }
}