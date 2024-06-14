import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View } from 'react-native';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import { useState } from 'react';
export default function App() {
  const [date, setDate] = useState(new Date());
  const[show,setShow]=useState(false)
  const[mode,setMode]=useState('date')
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  }

  const showMode = (modeToShow ) => {
    setShow(true);
    setMode(modeToShow);
  }
  return (
    <View style={styles.container}>
      <Button title="Show DatePicker" onPress={() => showMode('date')}/>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
