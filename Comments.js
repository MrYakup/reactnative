import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable } from 'react-native'
import ImageView from "react-native-image-viewing";
import DropDownPicker from 'react-native-dropdown-picker';
import { Rating } from 'react-native-ratings';
import { commentPhotos, profilePhotos } from '../../../models/Company'


const header = () => {
    return (
        <View style={{ paddingTop: 70, paddingHorizontal: 12 }}>
            <View style={{ flexDirection: "row", paddingBottom: 12 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", marginRight: 10 }}>Tarık</Text>
                <Rating
                    // reviews={["çok kötü", "kötü", "eh işte", "iyi", "çok iyi"]}
                    // style={{}}
                    fractions={20}
                    jumpValue={0.5}
                    imageSize={20}
                />
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 12 }}>
                <Text style={{ color: "#9A9A9A" }}>Burak</Text>
                <Text style={{ width: 2, backgroundColor: "#9A9A9A", marginHorizontal: 8 }}></Text>
                <Text style={{ color: "#9A9A9A" }}>5 Ağustos 2022</Text>
            </View>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "400", lineHeight: 24 }}>
                    I like barber more and more each day because it makes my life a lot easier. Thanks for the great service. You've saved our business! I was amazed at the quality of barber.
                </Text>
            </View>
        </View>
    )
}

DropDownPicker.setListMode("SCROLLVIEW");
DropDownPicker.setLanguage("TR");
const Comments = () => {

    const { width, height } = Dimensions.get("window")
    const [visible, setIsVisible] = useState(false);
    const [itemIndex, setItemIndex] = useState(0);


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Puana Göre Filtrele', value: 'Puana Göre Filtrele' },
        { label: 'Tarihe Göre Filtrele', value: 'Tarihe Göre Filtrele' }
    ]);

    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: 16, paddingBottom: 19 }}>
                <DropDownPicker
                    style={{ width: width * 0.63, borderColor: "#f65935" }}
                    containerStyle={{
                        width: width * 0.63,
                        marginVertical: 40
                    }}
                    textStyle={{
                        fontSize: 15
                    }}
                    arrowIconStyle={{
                        width: 22,
                        height: 22,
                        borderRadius: 20,
                        borderColor: "red",
                    }}
                    dropDownContainerStyle={{
                        borderTopColor: "white",
                        borderEndColor: "#f65935",
                        borderStartColor: "#f65935",
                        borderBottomColor: "#f65935",

                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            <View style={{ paddingVertical: 24 }}>
                <View style={styles.photosHead}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Fotoğraflı Değerlendirmeler</Text>
                    <Text style={{ color: "#9A9A9A" }}>{profilePhotos.length} Fotoğraf</Text>
                </View>
                <View style={{ paddingVertical: 24 }}>
                    <FlatList
                        ItemSeparatorComponent={() => <View style={{ height: 14, width: 14 }} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={profilePhotos}
                        renderItem={({ item }) =>
                            <Pressable onPress={() => {
                                setItemIndex(item.id)
                                setIsVisible(true)
                            }}
                                style={{ width: 140, height: 140, borderRadius: 10, overflow: "hidden" }}>
                                <Image style={{ width: 140, height: 140 }} source={{ uri: item.url }} />
                            </Pressable>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            {
                [1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <View key={item} style={styles.commentContainer}>
                        <View style={styles.commentRate}>
                            <Text style={{ fontSize: 16, fontWeight: "500", marginRight: 10 }}>Tarık</Text>
                            <Rating
                                // reviews={["çok kötü", "kötü", "eh işte", "iyi", "çok iyi"]}
                                // style={{}}
                                fractions={5}
                                jumpValue={0.5}
                                imageSize={20}
                            />
                        </View>
                        <View style={styles.commentDate}>
                            <Text style={{ color: "#9A9A9A" }}>Burak</Text>
                            <Text style={{ color: "#9A9A9A", marginHorizontal: 8 }}>|</Text>
                            <Text style={{ color: "#9A9A9A" }}>5 Ağustos 2022</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: "400", lineHeight: 22 }}>
                                I like barber more and more each day because it makes my life a lot easier. Thanks for the great service. You've saved our business! I was amazed at the quality of barber.
                            </Text>
                        </View>
                    </View>
                ))
            }
            <ImageView
                images={commentPhotos}
                imageIndex={itemIndex}
                visible={visible}
                backgroundColor={"white"}
                presentationStyle={'formSheet'}
                onRequestClose={() => setIsVisible(false)}
                HeaderComponent={header}
                animationType={"fade"}
            />
        </ScrollView>
    )
}

export default React.memo(Comments);

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    photosHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 36,
        paddingHorizontal: 16
    },
    commentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 22
    },
    commentRate: {
        flexDirection: "row",
        paddingBottom: 12
    },
    commentDate: {
        flexDirection: "row",
        paddingBottom: 12
    }
})