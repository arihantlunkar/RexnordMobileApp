import React, { Component } from "react";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native";

import ContactUsScreenStyles from "../assets/css/ContactUsScreenStyles";

class ContactUsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: ContactUsScreen.renderHeader(navigation)
  });

  static renderHeader(navigation) {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={ContactUsScreen.onPressBack(navigation)} />
        <Appbar.Content title="Rexnord Electronics" subtitle="Contact Us" />
      </Appbar.Header>
    );
  }

  static onPressBack(navigation) {
    return () => navigation.navigate("Home");
  }

  render() {
    return (
      <ScrollView contentContainerStyle={ContactUsScreenStyles.content}>
        <Card style={ContactUsScreenStyles.card}>
          <Card.Content>
            <Title>Head Office</Title>
            <Paragraph>
              92-D, Govt. Indl. Estate,
              {"\n"}
              Sahyadrinagar, {"\n"}
              Charkop, Kandivli (West), {"\n"}
              Mumbai-400067. (INDIA)
              {"\n"}
              {"\n"}
              Tel : +91-22-62401844 / 45 / 46 / 47 / 48 {"\n"}
              Fax : +91-22-62401816 {"\n"}
              {"\n"}
              Email (Local Sales) : sales@rexnordindia.com
              {"\n"}
              Email (Export Sales): kct@rexnordindia.com
              {"\n"}
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={ContactUsScreenStyles.card}>
          <Card.Content>
            <Title>Factory Address</Title>
            <Paragraph>
              Survey no. 62, 74, 75, 20 ,{"\n"}
              Village Devdal (Sagpada), {"\n"}
              Opp Sagar Hotel Kaman Bhiwandi Road, {"\n"}
              Kaman Tal- Vasai, Dist Thane- 401208
              {"\n"}
              {"\n"}
              Tel : +91-22-62401844 / 45 / 46 / 47 / 48 {"\n"}
              Fax : +91-22-62401816 {"\n"}
              {"\n"}
              Email (Local Sales) : sales@rexnordindia.com
              {"\n"}
              Email (Export Sales): kct@rexnordindia.com
              {"\n"}
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}

export default ContactUsScreen;
