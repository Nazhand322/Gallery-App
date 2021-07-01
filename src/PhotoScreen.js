import React from 'react'
import { View, Image, Dimensions } from 'react-native'

const PhotoScreen = ({ route, navigation }) => {
  const { url } = route.params

  return (
    <View>
      <Image source={{ uri: url }} style={{ width: Dimensions.get('window').width, height: "100%" }} />
    </View>
  )
}

export default PhotoScreen