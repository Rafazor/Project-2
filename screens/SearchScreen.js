import React from 'react';
import {Text, TextInput, View} from "react-native";
import {MOVIE_API_KEY} from "../ENV";


export default class SearchScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Movie App",
        };
    };

    constructor(props) {
        super(props);
        this.state = {userSearch: ''};
    }

    getMovieList = async () => {
        try {
            let response = await fetch(
                'http://www.omdbapi.com/?apikey=' + MOVIE_API_KEY +'&s=' + this.state.userSearch,
            );
            let responseJson = await response.json();

            this.props.navigation.navigate('SearchResults', {
                movieList: responseJson,
                searchText: this.state.userSearch
            })

        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{marginBottom: 20}}>Search for movies or series!</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        paddingLeft: 10,
                        borderWidth: 1,
                        width: 300,
                        marginBottom: 20
                    }}
                    placeholder="Search something..."
                    onChangeText={(userSearch) => this.setState({userSearch})}
                />
                <Text style={{color: "red"}} onPress={() => this.getMovieList()}>SEARCH</Text>
            </View>
        );
    }
}