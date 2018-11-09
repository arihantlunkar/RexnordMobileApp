import React, { Component } from "react";
import { Appbar, Button, Card, Title } from "react-native-paper";
import { Text, ScrollView, View } from "react-native";

import ProductScreenStyles from "../assets/css/ProductScreenStyles";

class ProductScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: ProductScreen.renderHeader(navigation)
  });

  constructor(props) {
    super(props);

    const selectedItem = this.props.navigation.state.params.selectedItem;
    this.subcategory = selectedItem.subcategory;
    this.categoryName = selectedItem.name;
  }

  static renderHeader(navigation) {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={ProductScreen.onPressBack(navigation)} />
        <Appbar.Content
          title="Rexnord Electronics"
          subtitle="Product Subcategory"
        />
      </Appbar.Header>
    );
  }

  static onPressBack(navigation) {
    return () => navigation.navigate("Home");
  }

  renderCardContent(characteristics, position) {
    const length = characteristics.length;
    return characteristics.map((item, index) => {
      if (
        (position == "left" && index <= length / 2 && index != 0) ||
        (position == "right" && index > length / 2 && index != 0)
      ) {
        return (
          <Text key={item.key}>
            {item.key} : {item.value}
          </Text>
        );
      }
    });
  }

  renderCards() {
    return this.subcategory.map(item => {
      return this.renderCard(item);
    });
  }

  renderCard(item) {
    return (
      <Card
        style={ProductScreenStyles.card}
        key={item.characteristics[0].value}
      >
        <Card.Cover
          source={{
            uri: item.url
          }}
        />
        <Card.Content>
          <Title>
            {item.characteristics[0].key}: {item.characteristics[0].value}
          </Title>
          <View style={ProductScreenStyles.cardContentStyle}>
            <View>{this.renderCardContent(item.characteristics, "left")}</View>
            <View style={ProductScreenStyles.cardContentSecondViewStyle}>
              {this.renderCardContent(item.characteristics, "right")}
            </View>
          </View>
          <Button
            mode="contained"
            style={ProductScreenStyles.marginBtn}
            onPress={this.onSelectSubCategory(item)}
          >
            Request Quotation
          </Button>
        </Card.Content>
      </Card>
    );
  }

  onSelectSubCategory(item) {
    return () => {
      this.props.navigation.navigate("Enquiry", {
        selectedItem: item
      });
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={ProductScreenStyles.content}>
        <Text style={ProductScreenStyles.containerText}>
          {this.categoryName}
        </Text>
        {this.renderCards()}
      </ScrollView>
    );
  }
}

export default ProductScreen;
