import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import background from '../../assets/images/background.jpg'
import favicon from '../../assets/images/icon.png'
interface IHomeProps {
}

const Home: React.FC<IHomeProps> = () => {
    return (
        <ImageBackground
            source={background}
            style={{ flex: 1 }}
            
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={favicon}
                    style={{ height: 128, width: 128, borderRadius: 64 }}
                />
                <Text style={{ color: 'black', fontFamily: 'Comfortaa-Regular' }}>Template GR</Text>
            </View>
        </ImageBackground>
    )
};

export default Home;