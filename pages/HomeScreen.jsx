import {TouchableOpacity, Text, TextInput, View, Button } from 'react-native';

export default function HomeScreen({route}) {
    return(
        <View className='flex justify-center items-center h-full w-full'>
            <Text>Welcome! {route.params.name}</Text>
        </View>
    )
}