import React, { Component } from 'react';
import { Image, Dimensions, Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class Shipping extends Component {
  static navigationOptions = {
    headerStyle: { position: 'absolute', top: 0 }
  }

  constructor(props) {
    super(props);
    // Complete
  }

  // Called when User Clicks Next
  onSubmit = (navigate) => {
    // TODO:
    // 1. Alert the entire shipping address
    // 2. Navigate to Record page
  }

  // TODO:
  // Complete all text fields
  render() {
    const { navigate } = this.props.navigation;
    const resizeMode = 'center';
    const {height, width} = Dimensions.get('window');
    return (
      <View style = {{
        flex: 1,
      }}>
        <Image style={{         
          position: 'absolute',
          top: height * (20 / 375),
          left: width * (100 / 667),
          height: height * (315 / 375),
          width: height * (415 / 375)}}
        source={require('../images/Main.png')} />

        <View style={{
          position: 'absolute',
          top: height * (50 / 375),
          left: width * (150 / 667),
          height: height * (275 / 375),
          width: height * (367 / 375)
        }}>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image style={{ flex: 1, resizeMode: 'contain', }}
               source={require('../images/Title.png')}
            />
          </View>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}><Text style={{ width: 80 }}> Name :< /Text><TextInput style={{ width: 200, backgroundColor: 'white' }}
                 placeholder="Enter your Name"/></View>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}><Text style={{ width: 80 }}> Name :< /Text><TextInput style={{ width: 200, backgroundColor: 'white' }}
                 placeholder="Enter your Name"/></View>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}><Text style={{ width: 80 }}> Name :< /Text><TextInput style={{ width: 200, backgroundColor: 'white' }}
                 placeholder="Enter your Name"/></View>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}><Text style={{ width: 80 }}> Name :< /Text><TextInput style={{ width: 200, backgroundColor: 'white' }}
                 placeholder="Enter your Name"/></View>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}><Text style={{ width: 80 }}> Name :< /Text><TextInput style={{ width: 200, backgroundColor: 'white' }}
                 placeholder="Enter your Name"/></View>
          <View style = {{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}><Text style={{ width: 80 }}> Name :< /Text><TextInput style={{ width: 200, backgroundColor: 'white' }}
                 placeholder="Enter your Name"/></View>
        </View>
        <View style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: height * (60 / 375),
          width: height * (150 / 375),
        }}><Image style={{ flex: 1 , height:null, width:null}} source={require('../images/Back.png')} /></View>
        <View style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          height: height * (60 / 375),
          width: height * (150 / 375),
        }}><Image style={{ flex: 1, height:null, width:null }} source={require('../images/Next.png')} /></View>

      </View>
    )
  }
}
