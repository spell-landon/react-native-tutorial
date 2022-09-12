// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  const [numLines, setNumLines] = useState(1);
  const handlePress = () => {
    if (numLines === 1) {
      setNumLines(0);
    } else {
      setNumLines(1);
    }
  };
  const [blur, setBlur] = useState(10);
  const handleBlur = () => {
    setBlur(0);
  };
  console.log('React Native Dimensions: ', Dimensions.get('screen'));
  console.log('useDimensions Hook: ', useDimensions());
  console.log('useDeviceOrientation Hook: ', useDeviceOrientation());

  const { landscape } = useDeviceOrientation();
  return (
    <>
      {/* <SafeAreaView style={styles.container}>
        <Button
          color={'red'}
          title='Alert Button'
          onPress={() =>
            Alert.alert('My title', 'my message', [
              { text: 'Yes', onPress: () => console.log('Yes') },
              { text: 'No', onPress: () => console.log('No') },
            ])
          }
        />
        <Button
          style={styles.button}
          color={'blue'}
          title='Prompt Button'
          onPress={() => {
            Alert.prompt('Prompt Title', 'Prompt message', (text) =>
              console.log(text)
            );
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Uh, oh!', 'What do I do now?')}>
          <Text>Pressable</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'dodgerblue',
            width: landscape ? '100%' : '30%',
            height: '50%',
            marginRight: 'auto',
          }}></View>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{ backgroundColor: 'dodgerblue', width: 100, height: 100 }}
        />
        <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
        <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      </View> */}
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    backgroundColor: 'orange',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
});
