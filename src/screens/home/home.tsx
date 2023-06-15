import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from '../../../src/components/bottomSheet/bottomSheet';
import { useState } from 'react';
import Icon from "react-native-vector-icons/Fontisto";
import Bell from "react-native-vector-icons/Feather";
import Money from "react-native-vector-icons/FontAwesome5";
import HomePage from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Card from "react-native-vector-icons/MaterialIcons";
import { CustomComponent } from '../../../src/styled-components/styled';


export default function Home() {

    const [show, setShow] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [selectedIcon, setSelectedIcon] = useState('home');

    const handlerShow = () => {
        setShow(!show)
    }

    const handlePress = (iconName: any) => {
        setSelectedIcon(iconName);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1, justifyContent: 'space-between' }}>
            <ScrollView style={{
                backgroundColor: "#f2f2f2",
                paddingLeft: 20,
                paddingRight: 20
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
                        <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                            {
                                showPassword
                                    ?
                                    <>
                                        <Text style={{ fontSize: 40, color: "#3f3e3e", fontWeight: "600" }}>R$5,764,98</Text>
                                        <TouchableOpacity onPress={() => setShowPassword(false)}>
                                            <Bell name="eye" size={30} color={"#4e1762"} />
                                        </TouchableOpacity>
                                    </>
                                    :
                                    <>
                                        <Text style={{ fontSize: 40, color: "#3f3e3e", fontWeight: "600" }}>•••••••</Text>
                                        <TouchableOpacity onPress={() => setShowPassword(true)}>
                                            <Bell name="eye-off" size={30} color={"#4e1762"} />
                                        </TouchableOpacity>
                                    </>
                            }
                        </View>
                        <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15, color: "#000" }}>Seu Balanço</Text>
                            <Text style={{ fontSize: 15, color: "#ccc" }}>Últimos 5 Dias</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: "100%", display: 'flex', flexDirection: "row", marginTop: 48, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: "#56058578", borderRadius: 100, marginRight: 20 }}>
                            <Card name="addchart" size={25} color={"#550683"} style={{ padding: 10, borderRadius: 100 }} />
                        </TouchableOpacity>
                        <Image
                            source={require('../../../assets/user.png')}
                            style={{ width: 50, height: 50, borderRadius: 100 }}
                        />
                        <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                            <Text style={{ fontSize: 15, color: "#000", fontWeight: "600" }}>Warllei S Martins</Text>
                            <Text style={{ fontSize: 15, color: "#ccc", fontWeight: "300" }}>*** 9321 1234</Text>
                        </View>
                    </View>
                    <Image source={require('../../../assets/visa.png')} style={{ width: 50, height: 50 }} />
                </View>

                <View style={{ marginTop: 48 }}>
                    <Text style={{ fontWeight: "600" }}>Transferência Rápida</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ marginRight: 40, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Bell name="user-plus" size={25} color={"#550683"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginRight: 25 }}>
                            <Image
                                source={require('../../../assets/user3.png')}
                                style={{ width: 35, height: 35, borderRadius: 100 }}
                            />
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>Fernanda</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginRight: 25 }}>
                            <Image
                                source={require('../../../assets/user1.png')}
                                style={{ width: 35, height: 35, borderRadius: 100 }}
                            />
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>Gabriel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginRight: 25 }}>
                            <Image
                                source={require('../../../assets/user2.png')}
                                style={{ width: 35, height: 35, borderRadius: 100 }}
                            />
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>Júlio</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginRight: 25 }}>
                            <Image
                                source={require('../../../assets/user3.png')}
                                style={{ width: 35, height: 35, borderRadius: 100 }}
                            />
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>Fernanda</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginRight: 25 }}>
                            <Image
                                source={require('../../../assets/user1.png')}
                                style={{ width: 35, height: 35, borderRadius: 100 }}
                            />
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>Gabriel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginRight: 25 }}>
                            <Image
                                source={require('../../../assets/user2.png')}
                                style={{ width: 35, height: 35, borderRadius: 100 }}
                            />
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>Júlio</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </ScrollView>

            <BottomSheet show={show} handlerShowContent={setShow} />

            <View style={styles.containerNav}>
                <TouchableOpacity style={{ padding: 20, borderRadius: 100 }} onPress={() => handlePress('home')}>
                    <HomePage name="home" size={25} color={selectedIcon === 'home' ? '#560585' : '#56058582'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 20, borderRadius: 100 }} onPress={() => handlePress('wallet')}>
                    <HomePage name="wallet" size={25} color={selectedIcon === 'wallet' ? '#560585' : '#56058582'} />
                </TouchableOpacity>
                <View style={{ top: -60, padding: 20, backgroundColor: "#560585", borderRadius: 100 }}>
                    <TouchableOpacity onPress={handlerShow} >
                        <Icon name="arrow-swap" size={25} color={"#fff"} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 20, borderRadius: 100 }} onPress={() => handlePress('user')}>
                    <HomePage name="user" size={25} color={selectedIcon === 'user' ? '#560585' : '#56058582'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 20, borderRadius: 100 }} onPress={() => handlePress('graph')}>
                    <Entypo name="line-graph" size={25} color={selectedIcon === 'graph' ? '#560585' : '#56058582'} />
                </TouchableOpacity>
            </View>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    containerNav: {
        height: 120,
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
        shadowColor: "#000",
        flexDirection: "row",
        alignItems: 'center',
        borderColor: "#f2f2f2",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#f5f0f8',
        justifyContent: 'space-between',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        elevation: 24,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    },
    header: {
        marginTop: 60,
        width: "100%",
        display: 'flex',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

});
