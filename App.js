import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Shipping from './src/screens/Shipping';


const GulukulTest = StackNavigator(
  {
    Home: { screen: Login },
    Shipping: { screen: Shipping },
  },
  { headerMode: 'screen' }
);

export default () => <GulukulTest />;