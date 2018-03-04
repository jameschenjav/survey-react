import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Root, Container, Header, Text } from 'native-base';
import { Font, AppLoading } from 'expo';

import FieldSet from './src/native/FieldSet';
import createStore from './src/common/createStore';
import loadJsonToStore from './src/common/loadJsonToStore';

const store = createStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <Provider store={store}>
          <Container>
            <Header>
              <Text>
                Survey
              </Text>
            </Header>
            <FieldSet />
          </Container>
        </Provider>
      </Root>
    );
  }
}

export default App;

AppRegistry.registerComponent('App', () => App);

loadJsonToStore(store);
