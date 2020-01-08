import React from 'react';
import {AppLoading} from 'expo';
import {Container, Header, Title, Content, Footer, FooterTab, Button, 
  Left, Right, Body, Icon, Text, Grid, Col, Row, Card, CardItem } from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import { StatusBar, ScrollView, View, Image } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({isReady: true});
  }

  render(){
    if(!this.state.isReady){
      return <AppLoading />;
    }
    return(
      
      <Container>
        <Header style={{paddingTop: 30, height: 90, paddingBottom:10}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
          <View style={{flex:1}}> 
            <View style={{flex:1.25 , marginTop: 10}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <Button light style={{flex:1, height:90, margin: 5, justifyContent: 'center', borderRadius: 25}}><Text>Coba 1</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5, justifyContent: 'center', borderRadius: 25}}><Text>Coba 2</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5, justifyContent: 'center', borderRadius: 25}}><Text>Coba 3</Text></Button>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <Button light style={{flex:1, height:90, margin: 5, justifyContent: 'center', borderRadius: 25}}><Icon name='home' /></Button>
                <Button light style={{flex:1, height:90, margin: 5, justifyContent: 'center', borderRadius: 25}}><Text>Coba 2</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5, justifyContent: 'center', borderRadius: 25}}><Text>Coba 3</Text></Button> 
              </View>
            </View>
            <View style={{flex:0.5, padding: 10}}>
              <ScrollView horizontal={true}>
                  <Image source={require('./image/img2.jpg')} style={{width:200, height: 100, marginRight:7, marginBottom:3}}></Image>
                  <Image source={require('./image/img1.jpeg')} style={{width:200, height: 100, marginRight:7, marginBottom:3}}></Image>
                  <Image source={require('./image/Screenshot_1.png')} style={{width:200, height: 100, marginRight:7, marginBottom:3}}></Image>
              </ScrollView>
            </View>
            <View style={{flex:1.25}}></View>
          </View>
        <Footer style={{height: 70}}>
          <FooterTab style={{backgroundColor: '#f5f3f0'}}>
            <Button>
              <Text>Footer</Text>
            </Button>
            <Button>
              <Text>Footer</Text>
            </Button>
            <Button >
              <Text>Footer</Text>
            </Button>
            <Button>
              <Text>Footer</Text>
            </Button>
            <Button>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}


