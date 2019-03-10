import React from 'react';
import {Text, View, FlatList, ScrollView} from "react-native";

import {MOVIE_API_KEY} from "../ENV";

const MovieList = ({movieList, navigation}) => {
    console.log("muie", movieList);
    return (
        <ScrollView>
            {movieList.map((prop, key) => {
                return (
                    <Text key={key} onPress={() => navigation.navigate('Details', {
                        imdbID: prop.imdbID
                    })}>{prop.Title}</Text>
                );
            })}
        </ScrollView>
    )
}


export default class SearchResultsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch(
                'http://www.omdbapi.com/?apikey=c71febfe&s=' + this.props.navigation.getParam("searchText"),
            );
            let responseJson = await response.json();
            this.setState({
                dataSource: responseJson.Search
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>You searched for: {this.props.navigation.getParam("searchText")}</Text>
                <MovieList movieList={this.state.dataSource} navigation={this.props.navigation}/>
            </View>
        );
    }
}