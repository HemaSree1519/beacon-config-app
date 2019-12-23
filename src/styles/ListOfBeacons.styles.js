import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  separator: {
    justifyContent: 'center',
    height: 50,
    borderBottomColor: '#9cc5cc',
    borderBottomWidth: 1,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rssi: {
    position: 'absolute',
    right: 10,
    fontSize: 13,
  },
  type: {
    position: 'absolute',
    left: 10,
    fontSize: 17,
  },
});
