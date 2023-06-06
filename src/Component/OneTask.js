import { View, Text } from 'react-native';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './onetaskstyle';

const OneTask = ({ getTask, handleDelete, doneCounter }) => {
    const [done, setDone] = useState()

    const clickDelete = ()=>{
        handleDelete(getTask.item.id)
        doneCounter(false)
    }

    const clickDone = (isDone)=>{
        setDone(isDone)
        doneCounter(isDone)
    }

    return (
        <View style={styles.mapContainer}>
            {/* <Text style={styles.mapElement} key={TodoAction.id}>{TodoAction.toDo}</Text> */}
            <Text style={[styles.mapElement, done && styles.done ]}>{getTask.item.toDo}</Text>
            <View style={styles.checkAction}>
                <BouncyCheckbox onPress={(isChecked)=>{clickDone(isChecked)}} style={styles.checkbox} fillColor='gold'></BouncyCheckbox>
                <Text onPress={clickDone} style={styles.chkTxt}>Done</Text>
            </View>
            <View style={styles.checkAction}>
                <BouncyCheckbox onPress={clickDelete} style={styles.checkbox} fillColor='gold'></BouncyCheckbox>
                <Text onPress={clickDelete} style={styles.chkTxt}>Delete</Text>
            </View>
        </View>
    )
}

export default OneTask;