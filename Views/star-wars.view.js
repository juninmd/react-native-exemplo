import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  ListView
} from 'react-native';

import * as axios from "axios";
import StarWarsPerson from '../Components/star-wars-person.component'

const Props = {};
const State = { dataSource: {} };

export default class StarWars extends Component<Props, State> {

  dataset = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.dataset.cloneWithRows([])
    };

  }

  componentDidMount() {
    let app = this;
    axios.get('https://swapi.co/api/people')
      .then(function (response) {
        app.setState({
          dataSource: app.dataset.cloneWithRows(response.data.results)
        })
      })
      .catch(function (error) {
        app.setState({
          dataSource: app.dataset.cloneWithRows([])
        })
      });
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <StarWarsPerson dataSource={this.state.dataSource}></StarWarsPerson>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    height: '100%'
  }
});