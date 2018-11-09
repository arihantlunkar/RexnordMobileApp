import React, { Component } from "react";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native";

import AboutUsScreenStyles from "../assets/css/AboutUsScreenStyles";

class AboutUsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: AboutUsScreen.renderHeader(navigation)
  });

  static renderHeader(navigation) {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={AboutUsScreen.onPressBack(navigation)} />
        <Appbar.Content title="Rexnord Electronics" subtitle="About Us" />
      </Appbar.Header>
    );
  }

  static onPressBack(navigation) {
    return () => navigation.navigate("Home");
  }

  render() {
    return (
      <ScrollView contentContainerStyle={AboutUsScreenStyles.content}>
        <Card style={AboutUsScreenStyles.card}>
          <Card.Content>
            <Title>Welcome to REXNORD</Title>
            <Paragraph>
              REXNORD was Established in 1984 with Foreign Technical
              Collaboration with M/s. Micron Engineering Company, Korea.
              {"\n"}
              {"\n"}
              Today REXNORD is self independent to develop inhouse BLDC Motor
              and Energy Saving Fan & Motor.
              {"\n"}
              {"\n"}
              90% Production is inhouse to have consistency in quality & price
              competetiveness. {"\n"}
              {"\n"}
              As on 2017, company is manufacturing 2.5 millions fans and motors
              and by 2020 company will be manufacturing 5 millions fans and
              motors.
              {"\n"}
              {"\n"}
              K.C. Talwar {"\n"}
              (Managing Director) {"\n"}
              {"\n"}
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}

export default AboutUsScreen;
