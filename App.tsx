import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import { COLORS } from './src/constants/colors'
import SplashScreen from './src/screens/SplashScreen'
import RootNavigation from './src/navigation/rootNavigation'
import store from './src/redux/store/store'
import { Provider } from 'react-redux'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider store={store}>

        {/* <SplashScreen /> */}
        <RootNavigation />
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: COLORS.FADE_BLACK,
    flex: 1
  }
})