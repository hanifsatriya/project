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
            <View style={{flex:1 , marginTop: 10}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 1</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 2</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 3</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 4</Text></Button>  
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 1</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 2</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 3</Text></Button>
                <Button light style={{flex:1, height:90, margin: 5}}><Text>Coba 4</Text></Button>  
              </View>
            </View>
            <View style={{flex:1 , backgroundColor: 'white'}}>
              <ScrollView horizontal={true}>
                  <Image source={require('./image/img2.jpg')} style={{width:300, height: 200, marginTop: 5, marginRight:7}}></Image>
                  <Image source={require('./image/img1.jpeg')} style={{width:300, height: 200, marginTop: 5, marginRight:7}}></Image>
                  <Image source={require('./image/Screenshot_1.png')} style={{width:300, height: 200, marginTop: 5, marginRight:7}}></Image>
              </ScrollView>
            </View>
            <View style={{flex:1 , backgroundColor: 'grey'}}></View>
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


