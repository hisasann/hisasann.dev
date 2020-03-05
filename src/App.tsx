import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import logo from './logo.svg';
import './App.css';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

function App() {
  return (
    <div className="App">
      <View style={styles.container}>
        <Text>ほげ</Text>
        <TouchableOpacity onPress={() => {
          console.log(111);
        }}>
          <Text>ふが</Text>
        </TouchableOpacity>
      </View>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
