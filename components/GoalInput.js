import React from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

export const GoalInput = ({ handleClickAddGoal, handleChangeInput, value, showModal, handleCloseModal }) => {
  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        {/* <Image source={require('../assets/goal.png')} style={styles.image} /> */}
        <TextInput style={styles.textInput} placeholder='Enter Goal' value={value} onChangeText={handleChangeInput} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={handleClickAddGoal} color='#5e0acc' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={handleCloseModal} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
    // flexDirection: 'row',
    // justifyContent: 'center',
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: 'e4d0ff',
    width: '100%',
    color: 'white',
    borderRadius: 6,
    padding: 15,
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})