import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
// import logo from './logo.svg';
import './App.css';

interface IProps {
  children?: React.ReactNode;
  style?: StyleSheet.NamedStyles<any>;
  href?: string;
  target?: string;
}

const logoSize: number = 300;
const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    minHeight: '100vh',
  },
  logo: {
    borderRadius: logoSize / 2,
    height: logoSize,
    width: logoSize,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 30,
    padding: 5,
  },
  link: {
    color: '#61dafb',
    fontSize: 40,
    padding: 5,
  },
});

const Link = (props: IProps) => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(styles.link, props.style)}
  />
);

const logoUri = { uri: 'assets/images/hisasann_400x400.jpg' };

const App = (props: IProps) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log('ready');
    return () => {
    };
  }, []);

  useEffect(() => {
    if (clicked) {
      console.log('thanks!!');
    }
    return () => {
    };
  }, [clicked]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              setClicked(true);
            }}
          >
            <Image
              accessibilityLabel="hisasann"
              source={logoUri}
              resizeMode="contain"
              style={styles.logo}
            />
          </TouchableOpacity>
          <Text style={styles.text}>
            A Front-end engineer who loves
          </Text>
          <Text style={styles.text}>
            #Electron #Vim #Unity #React #RN #Nuxt #TypeScript #筋トレ
          </Text>
          <Text style={styles.text}>
            <span role="img" aria-label="Ramen">🍜🍝🍺💈🏋🏻‍♂️</span>
          </Text>
          <Link href="https://github.com/hisasann" target="_blank" style={styles.link}>
            github/hisasann
          </Link>
          <Link href="https://twitter.com/hisasann" target="_blank" style={styles.link}>
            twitter/hisasann
          </Link>
        </View>
      </View>
    </View>
  );
};

export default App;
