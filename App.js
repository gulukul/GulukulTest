import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Shipping from './src/screens/Shipping';
import RecordAudio from './src/screens/RecordAudio';


const GulukulTest = StackNavigator(
  {
    Home: { screen: Login },
    Shipping: { screen: Shipping },
    RecordAudio: { screen: RecordAudio },
  },
  { headerMode: 'screen' }
);

export default () => <GulukulTest />;
