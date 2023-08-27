import React from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './Navigation/Navigation'

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer fallback={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#42429a', }}>
              <StatusBar translucent={false} barStyle={'light-content'} backgroundColor="#42429a" />
              <ActivityIndicator size={'large'} color={'#42429a'} />
            </View>
          }>
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  )
}

export default App