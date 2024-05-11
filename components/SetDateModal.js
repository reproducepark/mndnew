import React, { useState, useEffect } from 'react';
import { View, Button, Modal, StyleSheet, Image, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SetDate = ({ setLockedDate }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setLockedDate(currentDate);
    };

    useEffect(() => {
        if (modalVisible) {
            setShowDatePicker(true);
        }
    }, [modalVisible]);

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    return (
        <View style={styles.container}>
            <Button color="transparent" title="모달 열기" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Image source={require('../assets/images/mnd.png')} />
                    <Text style={styles.text1}>꾹방모바일보안</Text>
                    <Text style={styles.text2}>차단일시를 변경하세요</Text>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="datetime"
                            is24Hour={true}
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                    <Button color='red' title="닫기" onPress={() => {
                        setModalVisible(false);
                        setShowDatePicker(false); // DateTimePicker를 보이지 않도록 설정
                    }} />
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -10,
        color: 'white',
        margin: 70,
    },
    text2: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
    text3: {
        fontSize: 20,
        textAlign: 'center',
        color : 'red',
    },
    container: {
        flex: 1,
        // marginLeft: ,
        marginTop: 60,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#deaa3c',
    },
});

export default SetDate;
