import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, TextInput, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import DropDown from '../../../components/DropDown';
import { Feather } from '@expo/vector-icons';
import { salonInfo } from '../../../models/Company'


const Services = () => {

    const [page, setPage] = useState(0)

    const first = useRef(null)
    const second = useRef(null)

    const handleFirst = () => {
        first.current.focus()
    }
    const handleSecond = () => {
        second.current
    }

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
                <Pressable onPress={() => {
                    setPage(0)
                    handleFirst
                }} style={{ borderBottomWidth: 2, paddingHorizontal: 50, borderBottomColor: page === 0 ? "#f65935" : "#d9d9d9" }}>
                    <Text style={{ marginHorizontal: 20, color: page == 0 ? "#f65935" : "#9a9a9a" }}>Erkek</Text>
                </Pressable>
                <Pressable onPress={() => {
                    setPage(1)
                    handleSecond
                }} style={{ borderBottomWidth: 2, paddingHorizontal: 50, borderBottomColor: page == 1 ? "#f65935" : "#d9d9d9" }}>
                    <Text style={{ marginHorizontal: 20, color: page == 1 ? "#f65935" : "#9a9a9a" }}>Kadın</Text>
                </Pressable>
            </View>

            <PagerView
                style={styles.pagerView}
                // ref={ref}
                initialPage={page}
                onPageSelected={(e) => {
                    if (e.nativeEvent.position !== undefined) {
                        setPage(e.nativeEvent.position)
                    }
                }}
            >
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.man} ref={first} key="1">
                    <View style={{ paddingBottom: 40 }}>
                        <Feather style={{ position: "relative", zIndex: 1, top: "50%", left: 10 }} name="search" size={24} color="gray" />
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Hizmet ara"
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: "600", paddingTop: 20 }}>Popüler Hizmetler </Text>
                    <View style={styles.serviceContainer}>
                        {
                            salonInfo[1]?.services?.map((service, index) =>
                                <View key={index} style={styles.serviceItem}>
                                    <Text style={styles.serviceItemText}>{service.name}</Text>
                                    <View style={styles.serviceItemRight}>
                                        <Text style={styles.serviceItemText}>{service.price}</Text>
                                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Randevu</Text></TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: "600", paddingBottom: 20 }}>Hizmetler</Text>
                    <DropDown />
                </ScrollView>
                <View style={styles.woman} ref={second} key="2">
                    <Text style={{ fontSize: 40 }}>Kadın</Text>
                </View>
            </PagerView>

        </View>
    )
}

export default React.memo(Services);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginBottom: 80
    },
    input: {
        backgroundColor: "#f3f3f3",
        paddingVertical: 12,
        paddingLeft: 40,
        borderRadius: 20
    },
    pagerView: {
        flex: 1,
    },
    man: {
        paddingHorizontal: 20
    },
    woman: {
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center"
    },




    serviceContainer: {
        marginBottom: 80
    },
    serviceItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 2,
        paddingVertical: 14,
    },
    serviceItemText: {
        fontSize: 16
    },
    serviceItemRight: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#f65935",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginLeft: 10
    },
    buttonText: {
        color: "white",
        fontSize: 16
    }
})