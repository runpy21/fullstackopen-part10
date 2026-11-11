import { StyleSheet, Text, View } from 'react-native'
import theme from '../theme'
import convertToThousands from '../utils/numberConverter'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  item: {
    alignItems: 'center',
  },
  value: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  label: {
    color: theme.colors.textSecondary,
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
          <Text style={styles.value}>{convertToThousands(value)}</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </View>
  )
}

export default RepositoryStats
