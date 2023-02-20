import React, { useState } from 'react'
import { StyleSheet, Text, Dimensions, globalStyles } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view';
import Services from './Tabs/Services';
import Comments from './Tabs/Comments';
import Images from './Tabs/Images';
import Contact from './Tabs/Contact';


const renderScene = ({ route }) => {
    switch (route.key) {
        case 'first':
            return <Services />;
        case 'second':
            return <Comments />;
        case 'third':
            return <Images />;
        case 'fourth':
            return <Contact />;
        default:
            return null;
    }
};

const renderTabBar = props => (
    <TabBar
        {...props}
        bounces
        indicatorStyle={{ backgroundColor: '#f65935' }}
        // tabStyle={{backgroundColor }}
        style={{ backgroundColor: 'white' }}
        // renderIcon={({ route, focused, color }) => (
        //     <Icon
        //       name={focused ? 'albums' : 'albums-outlined'}
        //       color={color}
        //     />
        //   )}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ margin: 3, color: focused ? "black" : "#838383", fontWeight: focused ? "600" : "500" }}>
                {route.title}
            </Text>
        )}
    />
);

const ProfileTabs = () => {

    const { width, height } = Dimensions.get('window')
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Hizmetler' },
        { key: 'second', title: 'Yorumlar' },
        { key: 'third', title: 'Resimler' },
        { key: 'fourth', title: 'İletişim' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            removeClippedSubviews={false}
            onIndexChange={setIndex}
            initialLayout={{ height: 0, width: width }}
            swipeEnabled
            swipeVelocityImpact={0.2}
        />
    )
}

export default ProfileTabs

const styles = StyleSheet.create({})