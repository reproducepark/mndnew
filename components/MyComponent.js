import React, { useState, useEffect } from 'react';
import { View, Button, Modal, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyComponent = ({ setLockedDate }) => {
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
                    <Text>차단일시를 변경하세요</Text>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="datetime"
                            is24Hour={true}
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                    <Button title="닫기" onPress={() => {
                        setModalVisible(false);
                        setShowDatePicker(false); // DateTimePicker를 보이지 않도록 설정
                    }} />
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginLeft: ,
        marginTop: 60,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
    },
});

export default MyComponent;
