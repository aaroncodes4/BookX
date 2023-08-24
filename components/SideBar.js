import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SideBar = ({ isVisible, onClose }) => {
    if(!isVisible) return null;

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 24, color: '#fff', fontWeight: 700, marginLeft: '40%'}}>BookX</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <AntDesign name="closecircle" size={22} color="#fff" />
            </TouchableOpacity>
        </View>
        <View style={styles.hr}/>
        <View style={styles.barCont}>
            <Text style={{color: '#fff', fontSize: 20, fontStyle: 'italic'}}>Filter</Text>
            <View style={styles.list}>
                <TouchableOpacity style={styles.cont}>
                    <Entypo name="reply-all" size={24} color="#fff" />
                    <Text style={{color: '#fff', fontSize: 23, fontWeight: 600}}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cont}>
                    <Entypo name="location-pin" size={24} color="#fff" />
                    <Text style={{color: '#fff', fontSize: 23, fontWeight: 600}}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cont}>
                    <FontAwesome5 name="search-location" size={24} color="#fff" />
                    <Text style={{color: '#fff', fontSize: 23, fontWeight: 600}}>Venue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cont}>
                    <MaterialIcons name="category" size={24} color="#fff" />
                    <Text style={{color: '#fff', fontSize: 22, fontWeight: 600}}>Category</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.hr}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 800,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.secondary,
        gap: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
    },
    closeButton: {
        marginRight: 20,
    },
    barCont: {
        gap: 30,
        padding: 20,
    },
    list: {
        flexDirection: 'column',
        gap: 30,
    },
    cont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingVertical: 10,
    },
    hr: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    }
});


export default SideBar;