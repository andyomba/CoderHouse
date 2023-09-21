import { Details, Home, Products } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Hola Mundo!!! "
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        //Podemos usar esta parte para poder agregar algun tipo de titulo mas caracteristico
        /* header: () => (
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Button onPress={() => navigation.goBack()} title="Go Back" />
              <Header title={route.name} />
            </View>
          ), */
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default StackNavigator