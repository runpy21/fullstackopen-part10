import { StatusBar, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  )
}

export default Main
