import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Pressable, FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { topImages } from '../../models/Company'
import ProfileTabs from './ProfileTabs';


const CompanyProfileScreen = () => {

    const { width, height } = Dimensions.get('window')

    return (
        <View style={styles.container} >
            <View style={{ flex: 1.2 }}>
                <View style={styles.topIcons}>
                    <Pressable style={styles.back}>
                        <Ionicons name="md-chevron-back-circle-outline" size={32} color="white" />
                        <Text style={styles.backText}>Geri git</Text>
                    </Pressable>
                    <View style={styles.review}>
                        <Text style={styles.reviewRate}>4.2</Text>
                        <AntDesign name="star" size={18} color="#ffd700" />
                        <Text style={styles.reviewComment}>(220)</Text>
                    </View>
                </View>

                <FlatList
                    // ItemSeparatorComponent={() => <View style={{ height: 14, width: 14 }} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={topImages}
                    decelerationRate="fast"
                    pagingEnabled={true}
                    renderItem={({ item }) =>
                        <Image style={{ width: width, flex: 1 }} key={item.id} source={{ uri: item.uri }} />}
                    keyExtractor={item => item.id}
                />

                <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>Barberschop Ciach & Style</Text>
                    <Text style={styles.companyAdress}>Kızılay, Yiğit Apartmanı, Meşrutiyet mahallesi, Konur Sok. D:No:9/11, 06420 Ankara</Text>
                </View>
            </View>
            <View style={{ flex: 2 }}>
                <ProfileTabs />
            </View>

        </View>
    )
}

export default CompanyProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topIcons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 60,
        left: 20,
        zIndex: 1
    },
    back: {
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        color: "white",
        fontSize: 24
    },
    review: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 14,
        paddingHorizontal: 9,
        paddingVertical: 7
    },
    reviewRate: {
        fontWeight: "600",
        marginRight: 2
    },
    reviewComment: {
        color: "#838383",
        fontWeight: "600",
        marginLeft: 2
    },
    companyInfo: {
        padding: 16
    },
    companyName: {
        fontSize: 24,
        fontWeight: "700"
    },
    companyAdress: {
        fontSize: 13,
        fontWeight: "400",
        color: "#838383",
        paddingTop: 8
    },
})