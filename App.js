import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleChangeInput = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const handleClickAddGoal = () => {
    setCourseGoal((prev) => [...prev, { text: enteredGoal, id: Math.random() }])
    setEnteredGoal('')
    handleCloseModal()
  }

  const handleDeleteItem = (id) => {
    setCourseGoal((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={() => setModalVisible(true)} />
        <GoalInput
          showModal={modalVisible}
          value={enteredGoal}
          handleChangeInput={handleChangeInput}
          handleClickAddGoal={handleClickAddGoal}
          handleCloseModal={handleCloseModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text} handleDeleteItem={handleDeleteItem} />
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#1e085a'
    // padding: 50,

  },
  goalsContainer: {
    flex: 5
  },
});


