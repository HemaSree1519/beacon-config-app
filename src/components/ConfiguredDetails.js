import React from 'react';
import {View, Text} from 'react-native';

export default class ConfiguredDetails extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Bin configure status',
      headerTintColor: 'white',
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: '#9cc5cc',
        height: 50,
      },
    };
  };
  render() {
    return (
      <View>
        <Text>Successfully configured</Text>
      </View>
    );
  }
}
