import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';


const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const handleRadioChange = (value) => {
    setSelectedValue(value)
  }

  const handlePayment = () => {
    // Payment processing logic

    console.log('Payment processing...');
  };

  return (
    <View style={styles.container}>
        <View style={{width: '100%', marginLeft: 35}}>
            <Text style={{fontSize: 20, fontWeight: 600, textAlign: 'center'}}>Choose one</Text>
            <RadioButton.Group onValueChange={(value) => handleRadioChange(value)} value={selectedValue}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton.Item
                        value='option 1'
                    />
                    <Text style={{fontSize: 20, fontWeight:600}}>SINGLE</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton.Item value='option 2'/>
                    <Text style={{fontSize: 20, fontWeight:600}}>DOUBLE</Text>
                </View>
            </RadioButton.Group>
            
        </View>
      <Text style={styles.heading}>Payment Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiry}
        onChangeText={(text) => setExpiry(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={(text) => setCvv(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name on Card"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={{width: 340, fontSize: 18}}>In addition to the payment terms and conditions contained in other Sections of this Agreement, the originating Party shall pay to the transiting Party a transit service charge as set forth in Table One.</Text>
            <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', marginVertical: 8, marginLeft: -35}}>
                <Checkbox
                    value={checked}
                    onValueChange={setChecked}
                />
                <Text style={{color: 'grey', fontSize: 16}}>I've read and agreed to terms and conditions</Text>
            </View>
      <Button title="Make Payment" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default PaymentScreen;
