/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Alert
} from 'react-native';

import * as axios from "axios";

const Props = { dataSource: {} };

export default class StarWarsPerson extends Component<Props> {

  constructor(props) {
    super(props);
  }



  render() {

    const clicou = (nomePersonagem) => {
      Alert.alert(
        'Você escolheu!',
        nomePersonagem,
        [
          { text: 'OK', onPress: () => console.log('clicou') },
        ],
        { cancelable: false }
      )
    }

    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.props.dataSource}
        renderRow={(item, index) =>
          <View style={styles.item}>
            <Text onPress={() => { clicou(item.name) }}>{item.name}</Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 2,
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.4,
    borderColor: '#d6d7da',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
});
