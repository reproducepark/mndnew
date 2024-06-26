import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function ShowDateDiff({ lockedDate }) {
    const [timeDifference, setTimeDifference] = useState(0);
    const [overNine, setOverNine] = useState(true);

    const formatTimeDifference = (difference) => {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return [`${days}일`, `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`];
    };


    useEffect(() => {
        const timerID = setInterval(() => {
            const currentTime = new Date();
            const difference = currentTime - lockedDate;
            setTimeDifference(difference);
        }, 1000);

        // when time difference is bigger than 9 days, change marginLeft
        if (timeDifference > 9 * 24 * 60 * 60 * 1000) {
            setOverNine(true);
        } else {
            setOverNine(false);
        }

        return () => {
            clearInterval(timerID);
        };
    }, [lockedDate]);

    return (
        <View>
            <Text style={[overNine ? styles.dateDiff1a : styles.dateDiff1b]}>{formatTimeDifference(timeDifference)[0]}</Text>
            <Text style={styles.dateDiff2}>{formatTimeDifference(timeDifference)[1]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dateDiff1a: {
        color: '#cfcfcf',
        fontSize: 18,
        fontVariant: ['tabular-nums'],
        textAlign: 'center',
        position: 'absolute',
        fontWeight: '500',
        top: 118,
        left: -12,
    },
    dateDiff1b: {
        color: '#cfcfcf',
        fontSize: 18,
        fontVariant: ['tabular-nums'],
        textAlign: 'center',
        position: 'absolute',
        fontWeight: '500',
        top: 118,
        left: -17,
    },
    dateDiff2: {
        color: '#cfcfcf',
        fontSize: 18,
        fontVariant: ['tabular-nums'],
        textAlign: 'justify',
        position: 'absolute',
        fontWeight: '500',
        top: 138,
        left: -37,
    },
});