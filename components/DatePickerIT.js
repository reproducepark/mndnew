import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerForIT = ({ setInstalledDate }) => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker();
        setDate(currentDate);
        setInstalledDate(currentDate);
        console.log(currentDate);
    };

    const handleTimeChange = (event, selectedTime) => {
        const currentDate = selectedTime || date;
        setShowTimePicker(); // iOS에서는 onChange에서만 시간을 닫습니다.
        // 시간을 선택한 뒤에 할 작업을 여기에 추가할 수 있습니다.
        setShowDatePicker();
        setDate(currentDate);
        setInstalledDate(currentDate);
        console.log(currentDate);
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const showTimePickerModal = () => {
        setShowTimePicker(true);
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDatePickerModal} style={styles.touchArea}>
                <Text style={styles.touchText}>날짜 선택</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <TouchableOpacity onPress={showTimePickerModal} style={styles.touchArea}>
                <Text style={styles.touchText}>시간 선택</Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleTimeChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 80,
        marginTop: 50,
    },
    touchArea: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 5,
    },
    touchText: {
        fontSize: 30,
    },
});

export default DateTimePickerForIT;
