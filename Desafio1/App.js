import { Home, Products } from './src/screens'

import fonts from './src/global/fonts'
import { useState } from 'react'
import { useFonts } from 'expo-font'


export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const[categorySelected , setCategorySelected] = useState('')

  if (!fontsLoaded){return null}

  return categorySelected ? <Products category={categorySelected} /> : ( <Home setCategorySelected={setCategorySelected} />)
}
