import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector, ScrollView } from "react-native-gesture-handler";
import { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Animated from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const BottomSheet = ({ show, handlerShowContent }: any) => {

    const translationY = useSharedValue(0);

    const context = useSharedValue({ y: 0 });

    const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 400

    const handlerShow = () => {
        handlerShowContent(false)
    }

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translationY.value }
    })
        .onUpdate((event) => {
            translationY.value = event.translationY + context.value.y;
            translationY.value = Math.max(translationY.value, MAX_TRANSLATE_Y)
        }).onEnd(() => {
            if (translationY.value > -SCREEN_HEIGHT / 3) {
                runOnJS(handlerShow)();
                translationY.value = withSpring(SCREEN_HEIGHT, { damping: 50 });
            } else if (translationY.value < -SCREEN_HEIGHT / 3) {
                translationY.value = withSpring(MAX_TRANSLATE_Y)

            }
        })

    const BottomSheetStyle = useAnimatedStyle(() => {

        const borderRadius = interpolate(
            translationY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        )
        return {
            borderRadius,
            transform: [{ translateY: translationY.value }],
        };
    })

    useEffect(() => {
        if (show) {
            translationY.value = withSpring(-SCREEN_HEIGHT / 2, { damping: 30 })
        } else {
            translationY.value = withSpring(SCREEN_HEIGHT, { damping: 30 })
        }

    }, [show])

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, BottomSheetStyle]}>

                <View style={styles.line}></View>

                <View style={{ width: SCREEN_WIDTH, paddingLeft: 15, height: SCREEN_HEIGHT / 2 }}>
                    <ScrollView>

                        <Text style={{ fontWeight: '700', marginBottom: 32 }}>Trasações Recentes</Text>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/steam.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Steam</Text>
                                    <Text>Game Pass - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#07ff06" }}>+39,99</Text>
                        </View>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/recive.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Transferência</Text>
                                    <Text>
                                        transfer - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#e72698" }}>-39,99</Text>
                        </View>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/recive.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Transferência</Text>
                                    <Text>
                                        transfer - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#07ff06" }}>+39,99</Text>
                        </View>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/steam.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Steam</Text>
                                    <Text>Game Pass - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#e72698" }}>-39,99</Text>
                        </View>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/recive.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Transferência</Text>
                                    <Text>
                                        transfer - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#e72698" }}>-39,99</Text>
                        </View>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/steam.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Steam</Text>
                                    <Text>Game Pass - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#e72698" }}>-39,99</Text>
                        </View>

                        <View style={styles.containerTrasition}>
                            <View style={styles.containerInfo}>
                                <Image
                                    source={require('../../../assets/recive.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
                                    <Text>Transferência</Text>
                                    <Text>
                                        transfer - 09:44 AM</Text>
                                </View>
                            </View>
                            <Text style={{ paddingRight: 30, color: "#e72698" }}>-39,99</Text>
                        </View>

                    </ScrollView>
                </View>


            </Animated.View>
        </GestureDetector>
    )
};

const styles = StyleSheet.create({
    containerTrasition: {
        marginBottom: 36,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    containerInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    bottomSheetContainer: {
        width: '100%',
        height: SCREEN_HEIGHT,
        backgroundColor: "#fff",
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        zIndex: 2
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: '#7809a1ad',
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 2
    }
});

export default BottomSheet;
