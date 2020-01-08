import React from 'react';
import {AppLoading} from 'expo';
import {Container, Header, Title, Content, Footer, FooterTab, Button, 
  Left, Right, Body, Icon, Text, Grid, Col, Row, Card, CardItem } from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import { StatusBar, ScrollView, View } from 'react-native';


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
        <Content>
        <Text>Bingung</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button >
              <Text>Footer</Text>
            </Button>
            <Button>
              <Text>Footer2</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}


