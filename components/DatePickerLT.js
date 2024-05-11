import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerForLT = ({setLockedDate }) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);

    const handleDateTimeChange = (event, selectedDateTime) => {
        const currentDateTime = selectedDateTime || dateTime;
        setShowDateTimePicker();
        setDateTime(currentDateTime);
        setLockedDate(currentDateTime);
        console.log(currentDateTime);
    };

    const showDateTimePickerModal = () => {
        setShowDateTimePicker(true);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDateTimePickerModal} style={styles.touchArea}>
                <Text style={styles.touchText}>           </Text>
            </TouchableOpacity>
            {showDateTimePicker && (
                <DateTimePicker
                    value={dateTime}
                    mode="datetime"
                    is24Hour="true"
                    // display="default"
                    onChange={handleDateTimeChange}
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
        marginLeft: 170,
        marginTop: 50,
    },
    touchArea: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 5,
    },
    touchText: {
        fontSize: 30,
    },
});

export default DateTimePickerForLT;
