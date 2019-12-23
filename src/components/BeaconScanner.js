import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/BeaconScanner.styles';

export default class BeaconScanner extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Dimeo',
      headerTintColor: 'white',
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: '#9cc5cc',
        height: 50,
      },
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigate('ListOfBeacons')}
          style={styles.button}>
          <Text style={styles.text}>Scan Beacons</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
