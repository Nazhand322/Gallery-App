import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native'

const PhotoBox = (props) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => props.nav.navigate('Photo', { url: props.urlFull })} style={{ width: Dimensions.get('window').width / 2, height: '100%', marginVertical: "2%" }}>
      <Image source={{ uri: props.urlThumb }} style={{ width: Dimensions.get('window').width / 2, height: "100%" }} />
      <Text style={styles.text}>
        {props.authorName}: {props.photoName}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20
  }
})

export default PhotoBox
