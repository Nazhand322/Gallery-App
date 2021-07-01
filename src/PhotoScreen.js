import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import PhotoView from 'react-native-photo-view-ex'



const PhotoScreen = ({ route, navigation }) => {
  const { url } = route.params

  return (
    <View>

      {/* <PhotoView          // неудачная попытка сделать зум для фото(RNPhotoViewer not found in UIManager)
    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
    source={{ uri: url }} 
    minimumZoomScale={1} 
    maximumZoomScale={2} 
/> */}
      <Image source={{ uri: url }} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} />
    </View>
  )
}

export default PhotoScreen