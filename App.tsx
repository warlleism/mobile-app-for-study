import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from './src/components/bottomSheet/bottomSheet';
import { useState } from 'react';
import Icon from "react-native-vector-icons/Fontisto";
import Bell from "react-native-vector-icons/Feather";
import Money from "react-native-vector-icons/FontAwesome5";
import CustomComponent from './src/styled-components/styled';


export default function App() {

  const [show, setShow] = useState(false)

  const handlerShow = () => {
    setShow(!show)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={{
        backgroundColor: "#f2f2f2"
      }}>
        <View style={styles.container}>
          <StatusBar style='light' />

          <View style={styles.header}>
            
            <CustomComponent />

            <View style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
              <Money name="money-bill-wave" size={20} color={"#7809a1"} />
              <Text style={{ fontSize: 20, marginLeft: 5, color: "#7809a1", fontWeight: "700" }}>Nexus</Text>
            </View>
            <TouchableOpacity>
              <Bell name="bell" size={30} color={"#4e1762"} />
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', flexDirection: "column", marginTop: 50 }}>
            <Text style={{ fontSize: 40, color: "#3f3e3e", fontWeight: "600" }}>R$5764,98</Text>

            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15, color: "#000" }}>Seu Balanço</Text>
              <Text style={{ fontSize: 15, color: "#ccc" }}>Últimos 5 Dias</Text>
            </View>
          </View>

        </View>
      </ScrollView>

      <BottomSheet show={show} handlerShowContent={setShow} />

      <View style={styles.closeIcon}>
        <View style={styles.containerNav}>
          <TouchableOpacity onPress={handlerShow}>
            <Icon name="arrow-swap" size={25} color={"#fff"} style={{ padding: 20, borderRadius: 100 }} />
          </TouchableOpacity>
        </View>
      </View>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2"
  },
  closeIcon: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#f5f0f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  containerNav: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: "#550683",
    borderRadius: 100,
    top: -40
  },
  header: {
    alignSelf: "center",
    marginTop: 60,
    width: "100%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

});
