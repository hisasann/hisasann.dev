# 🎂 hisasann.dev using React Native Web 🥮

## React Native Webを使うためのプロジェクト作成（create-react-app）

```bash
$ npx create-react-app my-app --typescript
$ cd my-app
$ yarn add react-native-web @types/react-native
$ yarn start
```

[Overview | Getting started - Page ⋅ Storybook](http://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page#create-react-app)

## サンプルコード

### App.tsx

```typescript jsx
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text>title</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>ボタン</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```

この状態で `yarn start` すれば自動でページが開き、 **react-native** のコンポーネントが Web 上で使えるようになる。

## 参考記事

[Create React Appで作成したReactアプリにReact Native for Webを導入する ｜ Developers.IO](https://dev.classmethod.jp/client-side/javascript/introduce-react-native-for-web/)

[react-native-web を試す - Qiita](https://qiita.com/propella/items/4cfd01506c72dc3d63ea)

[Expo Web（React Native for web）チュートリアル | TOAST Meetup](https://meetup-jp.toast.com/1883)

[React Native + Expo + TypeScriptで作るモバイルアプリ (Part1 - NativeBase編) - Fusic Tech Blog](https://tech.fusic.co.jp/posts/2019-10-30-react-native-expo-typescript-native-base/)

[React Native - CodeSandbox](https://codesandbox.io/s/q4qymyp2l6)

## shell をもっと勉強したい

```bash
$ curl https://hisasann.dev/sh -sSfL | sh
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
