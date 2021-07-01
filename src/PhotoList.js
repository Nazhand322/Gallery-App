import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

export const Navbar = (props) => (
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <Todo urlThumb={props.urlThumb} onRemove={removeTodo} onOpen={changeScreen} />
        )}
      />
    </View>
)

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        backgroundColor: '#3949ab',
        fontSize: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})
