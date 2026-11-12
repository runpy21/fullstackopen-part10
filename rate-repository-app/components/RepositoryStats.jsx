import { StyleSheet, View } from 'react-native'
import convertToThousands from '../utils/numberConverter'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  item: {
    alignItems: 'center',
  },
})

const RepositoryStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  const stats = [
    { label: 'Stars', value: stargazersCount },
    { label: 'Forks', value: forksCount },
    { label: 'Reviews', value: reviewCount },
    { label: 'Rating', value: ratingAverage },
  ]

  return (
    <View style={styles.container}>
      {stats.map(({ label, value }) => (
        <View key={label} style={styles.item}>
          <Text fontSize="subheading" fontWeight="bold">
            {convertToThousands(value)}
          </Text>
          <Text color="textSecondary">{label}</Text>
        </View>
      ))}
    </View>
  )
}

export default RepositoryStats
