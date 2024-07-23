/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import CompanyData from './components/companyData';
import StateTesting from './components/stateTesting';

const App = () => {
  const name = 'Sankey';
  let age = 23;
  let email = 'vaishnavi.k@sankeysolutions.com';

  function fruit() {
    return 'apple';
  }

  // function fruitssss(){
  //   console.warn("Function is called")
  // }

  const fruitssss = val => {
    console.warn(val);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Hello React Native</Text>
      <Button title="Press here"></Button>
      <Text style={{fontSize: 30}}>Subscribe</Text>
      <Button title="Tap here"></Button>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Text>{fruit()}</Text>
      <Text>{age === 20 ? 'above age' : 'below age'}</Text>
      <Text>{100 * 6}</Text>
      <UserData></UserData>
      <CompanyData></CompanyData>
      {/* <Button
        title="Fruitsss button 1"
        color={'green'}
        onPress={fruitssss}></Button> */}
      <Button
        title="Fruitsss button 2"
        color={'green'}
        onPress={() => fruitssss('hello')}></Button>

      <StateTesting></StateTesting>
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: Vaish</Text>
      <Text style={{fontSize: 20}}>Age: 22</Text>
      <Text style={{fontSize: 20}}>Email: vaish@test.com</Text>
    </View>
  );
};

export default App;
