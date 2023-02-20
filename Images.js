import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, FlatList, Dimensions } from 'react-native'
import { commentPhotos, profilePhotos } from '../../../models/Company'
import { Ionicons } from '@expo/vector-icons';

const Images = () => {
    const { width, height } = Dimensions.get('window')
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
                alwaysBounceVertical
                showsHorizontalScrollIndicator={false}
                data={profilePhotos}
                // decelerationRate="fast"
                // pagingEnabled={true}
                renderItem={({ item }) =>
                    <Pressable
                        style={{ width: width * 0.90, height: 230, borderRadius: 12, overflow: "hidden" }}>
                        <Image style={{ width: width * 0.90, height: 230 }} resizeMode="cover" source={{ uri: item.url }} />
                        <Ionicons style={{ position: "absolute", bottom: 10, right: 10 }} name="heart-outline" size={34} color="white" />
                    </Pressable>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default React.memo(Images);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 6
    }
})