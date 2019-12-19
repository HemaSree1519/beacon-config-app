import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/BeaconScanner.styles';

export default class BeaconScanner extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            onPress={console.log('Pressed me')}
            style={styles.button}>
            <Text style={styles.text}>Scan Beacons</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
