import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListCheckbox from './FlatListCheckbox';

export default function App()
{
  return (
    <>
      <StatusBar style="auto" />
      <FlatListCheckbox />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
