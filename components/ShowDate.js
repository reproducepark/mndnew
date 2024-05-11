import { View, Text, StyleSheet } from "react-native";

export default function ShowDate({ installedDate, lockedDate }) {
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();

        return `${year.toString().slice(-2)}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };

    return (
        <View>
            <Text style={styles.installedDate1}>{formatDate(installedDate)}</Text>
            <Text style={styles.installedDate2}>{formatDate(lockedDate)}</Text>
        </View>
    );
}

const dateFontSize = 23;

const styles = StyleSheet.create({
    installedDate1: {
        color: 'white',
        fontSize: dateFontSize,
        fontVariant: ['tabular-nums'],
        textAlign: 'center',
        position: 'absolute',
        fontWeight: '700',
        top: 120,
        left: 158,
    },
    installedDate2: {
        color: 'white',
        fontSize: dateFontSize,
        fontVariant: ['tabular-nums'],
        textAlign: 'center',
        position: 'absolute',
        fontWeight: '700',
        top: 153,
        left: 158,
    },
});