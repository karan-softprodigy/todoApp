import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const GoalItem = (props) => {
  return (
    <Pressable
      //only works in android
      // android_ripple={{ color: '#210644' }}
      onPress={props.handleDeleteItem.bind(this, props.id)}
      //for Iphone & android both
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem} >
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white'
  }
})