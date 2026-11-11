import { Image, StyleSheet, View, Text } from 'react-native'
import theme from '../theme'
import RepositoryStats from './RepositoryStats'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  repositoryInfo: {
    flexDirection: 'row',
    gap: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    gap: 5,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  description: {
    color: theme.colors.textSecondary,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 4,
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.repositoryInfo}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />

        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{item.fullName}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <RepositoryStats
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  )
}

export default RepositoryItem
