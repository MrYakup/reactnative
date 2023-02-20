import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import MapView from 'react-native-maps';
import { profilePhotos } from '../../../models/Company'
import { Entypo, FontAwesome5, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window")

const Contact = () => {
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.802220,
                        longitude: -122.271111,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>

            <View style={styles.teamContainer}>
                <Text style={styles.teamHead} >Ekibimiz</Text>
                <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 20, width: 20 }} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={profilePhotos}
                    renderItem={({ item }) => <View style={styles.profilePhotoContainer}>
                        <View style={{ borderRadius: 50, overflow: "hidden" }}>
                            <Image style={styles.profilePhoto} source={{ uri: item.url }} />
                        </View>
                        <Text>{item.name}</Text>
                    </View>}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.footer}>
                <View style={styles.workDay}>
                    <Text style={styles.dayHead}>Çalışma Saatleri</Text>
                    <View style={styles.day}><Text style={styles.dayText}>Pazartesi</Text><Text style={styles.dayHour}>8:00 - 17:00</Text></View>
                    <View style={styles.day}><Text style={styles.dayText}>Salı</Text><Text style={styles.dayHour}>8:00 - 17:00</Text></View>
                    <View style={styles.day}><Text style={styles.dayText}>Çarşamba</Text><Text style={styles.dayHour}>8:00 - 17:00</Text></View>
                    <View style={styles.day}><Text style={styles.dayText}>Perşembe</Text><Text style={styles.dayHour}>8:00 - 17:00</Text></View>
                    <View style={styles.day}><Text style={styles.dayText}>Cuma</Text><Text style={styles.dayHour}>8:00 - 17:00</Text></View>
                    <View style={styles.day}><Text style={styles.dayText}>Cumartesi</Text><Text style={styles.dayHour}>8:00 - 13:00</Text></View>
                    <View style={styles.day}><Text style={styles.dayText}>Pazar</Text><Text style={styles.dayHour}>Kapalı</Text></View>
                </View>

                <View style={styles.contacting}>
                    <View style={styles.social}>
                        <Entypo style={{ marginHorizontal: 4 }} name="instagram-with-circle" size={42} color="black" />
                        <FontAwesome5 style={{ marginHorizontal: 4 }} name="facebook" size={42} color="black" />
                    </View>
                    <View style={styles.phone}><Feather style={{ marginRight: 8 }} name="phone-call" size={22} color="black" /><Text>0505 735 82 25</Text></View>
                </View>

            </View>


        </ScrollView>
    )
}

export default React.memo(Contact);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    mapContainer: {
        borderRadius: 12,
        overflow: "hidden",
        alignSelf: "center",
        width: '90%',
        height: 200,
    },
    map: {
        alignSelf: "center",
        width: '100%',
        height: 200,
    },
    teamContainer: {
        paddingTop: 23,
        paddingHorizontal: 4
    },
    teamHead: {
        paddingHorizontal: 23,
        paddingBottom: 23,
        fontSize: 20,
        fontWeight: "600",
    },
    profilePhotoContainer: {
        height: 110,
        justifyContent: "center",
        alignItems: "center",
    },
    profilePhoto: {
        width: 80,
        height: 80,
    },
    footer: {
        alignSelf: "center",
        width: width * 0.85,
        alignItems: "center",
        paddingBottom: 50
    },
    workDay: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        borderRadius: 10,
        marginTop: 28,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    dayHead: {
        fontSize: 20,
        fontWeight: "500",
        paddingBottom: 30
    },
    day: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        height: 50
    },
    dayText: {
        fontSize: 15,
        color: "#9A9A9A"
    },
    dayHour: {
        fontSize: 15,
        fontWeight: "500"
    },
    contacting: {
        alignItems: "center",
        paddingVertical: 30
    },
    social: {
        flexDirection: "row",
        paddingBottom: 12
    },
    phone: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8
    }
})