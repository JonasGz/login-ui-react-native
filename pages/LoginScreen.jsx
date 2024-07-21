import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  return (
    <View className='w-full flex flex-col h-full bg-[#D4D7E7] items-center justify-center p-10'>
      <View className='flex justify-center items-center gap-6'>
        <Icon name='lock' size={90} color={'#000'}></Icon>
        <Text className='text-sm text-gray-500 pb-5'>Seja Bem Vindo!</Text>
      </View>

      <View className='flex flex-col gap-4 w-full pb-10'>
        <TextInput className='w-full border-white border rounded p-2 bg-[#e3e6ef]' placeholder='Jonas Chagas'></TextInput>
        <TextInput className='w-full border-white border rounded p-2 bg-[#e3e6ef]' placeholder='***********' placeholderTextColor='gray'></TextInput>
        <Text className='self-end text-gray-500'>Forgot Password</Text>
      </View>
      
      <View className='flex flex-col gap-5 w-full'>
        <TouchableOpacity className='bg-black w-full rounded-lg p-6 flex justify-center items-center'>
          <Text className='text-white text-base font-medium'>Sign In</Text> 
        </TouchableOpacity>
      </View>

      <Text className='pt-10 text-gray-500 pb-10'>Or continue with</Text>

      <View className='flex flex-row gap-5'>
        <TouchableOpacity className='bg-[#e3e6ef] p-4 rounded-2xl border border-white'>
          <Icon name='google' size={50}></Icon>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#e3e6ef] p-4 rounded-2xl border border-white'>
          <Icon name='apple' size={50}></Icon>
        </TouchableOpacity>  
      </View>
      <View className='pt-10 flex flex-row gap-2' >
        <Text className='text-gray-500'>Not a member?</Text><Text className='text-[#4b75ff] font-bold'>Register now</Text>
      </View>
    </View>
  );
}