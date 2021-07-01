import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PhotoBox from './src/PhotoBox'
import PhotoScreen from './src/PhotoScreen'

import { Provider, useSelector, useDispatch } from 'react-redux';
import { getPhotos } from './src/redux/action'
import { store } from './src/redux';

const loadPhotos = async () => {
  const photos = await (await fetch(
    'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  )).json()
  return photos
}

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState(useSelector(getPhotos))
  // const [photos, setPhotos] = useState([{ urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }, { urlThumb: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", urlFull: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png", authorName: "aga", photoName: "da" }])

  if (loading) {
    loadPhotos().then(tempPhotos => {
      tempPhotos.forEach(photo => {
        console.log(photos)
        let urlThumb = photo.urls.thumb
        let urlFull = photo.urls.full
        let authorName = photo.user.name
        let photoName = photo.description
        let temp = photos.concat({ urlThumb, urlFull, authorName, photoName })
        setPhotos(temp)
    dispatch({ type: "CHANGE_PHOTOS", data: temp })
  });
    })
    setLoading(false)
    dispatch({ type: "CHANGE_PHOTOS", data: photos })
  }
  else
    console.log('kek')

  useEffect(() => { console.log(photos.length) }, [loading])

  return (
    <View style={{ flex: 1 }}>
      {!loading && <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={photos}
        renderItem={({ item }) => (
          <PhotoBox nav={navigation} urlThumb={item.urlThumb} urlFull={item.urlFull} authorName={item.authorName} photoName={item.photoName} />
        )}
      />
      }
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Gallery'>
          <Stack.Screen name="Gallery" color='blue' component={MainScreen} options={{
          title: 'Gallery App',
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
          <Stack.Screen name="Photo" component={PhotoScreen} options={{
          title: 'Selected Photo',
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App