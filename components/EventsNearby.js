import { Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const EventsNearby = () => {
  return (
    <ScrollView>
      <Pressable style={{marginHorizontal: 18, marginBottom: 15}}>
        <View style={styles.container}>
          <View style={styles.imgcont}>
                <Image 
                    source={require('../assets/obd.jpg')}
                    style={{
                        resizeMode: 'cover',
                        width: '100%'
                    }}
                />
          </View>
          <View style={styles.content}>
            <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
              Devoid 2.0
            </Text>
            <View style={{marginTop: 10}}>
                <Text style={{color: '#fff', fontSize: 15,}}>18th September, 2023</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>SG Mall</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>9:00pm</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable style={{marginHorizontal: 18, marginBottom: 15}}>
        <View style={styles.container}>
          <View style={styles.imgcont}>
                <Image 
                    source={require('../assets/obd.jpg')}
                    style={{
                        resizeMode: 'cover',
                        width: '100%'
                    }}
                />
          </View>
          <View style={styles.content}>
            <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
              Devoid 2.0
            </Text>
            <View style={{marginTop: 10}}>
                <Text style={{color: '#fff', fontSize: 15,}}>18th September, 2023</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>SG Mall</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>9:00pm</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable style={{marginHorizontal: 18, marginBottom: 15}}>
        <View style={styles.container}>
          <View style={styles.imgcont}>
                <Image 
                    source={require('../assets/obd.jpg')}
                    style={{
                        resizeMode: 'cover',
                        width: '100%'
                    }}
                />
          </View>
          <View style={styles.content}>
            <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
              Devoid 2.0
            </Text>
            <View style={{marginTop: 10}}>
                <Text style={{color: '#fff', fontSize: 15,}}>18th September, 2023</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>SG Mall</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>9:00pm</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable style={{marginHorizontal: 18, marginBottom: 15}}>
        <View style={styles.container}>
          <View style={styles.imgcont}>
                <Image 
                    source={require('../assets/obd.jpg')}
                    style={{
                        resizeMode: 'cover',
                        width: '100%'
                    }}
                />
          </View>
          <View style={styles.content}>
            <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
              Devoid 2.0
            </Text>
            <View style={{marginTop: 10}}>
                <Text style={{color: '#fff', fontSize: 15,}}>18th September, 2023</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>SG Mall</Text>
                <Text style={{color: '#fff', fontSize: 15,}}>9:00pm</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default EventsNearby;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f1b3d',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    imgcont: {
        width: 150,
        height: 100,
        backgroundColor: '#fff',
        overflow: 'hidden'
    }
});
