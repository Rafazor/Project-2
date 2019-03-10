import React from 'react';
import {Text, TextInput, View} from "react-native";


export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userSearch: ''};
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Search Screen!</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
                    placeholder="Search something..."
                    onChangeText={(userSearch) => this.setState({userSearch})}
                />
                <Text onPress={() => this.props.navigation.navigate('SearchResults', {
                    searchText: this.state.userSearch
                })}>SEARCH</Text>
            </View>
        );
    }
}