import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import ReactNativeItemSelect from "react-native-item-select";

import HomeScreenStyles from "../assets/css/HomeScreenStyles";
import { rexnordData } from "../assets/data/RexnordData";

class HomeScreen extends React.Component {
  reactNativeItemSelectStyle = {
    rowWrapper: {
      justifyContent: "space-around",
      marginTop: 20,
      marginHorizontal: 10
    },
    itemComponentWrapper: {
      flexDirection: "row",
      flexShrink: 1,
      padding: 5
    },
    itemBoxHighlight: {
      flex: 0,
      marginBottom: 0,
      margin: 0,
      borderRadius: 5
    },
    activeItemBoxHighlight: {
      backgroundColor: "rgba(248, 227, 245, 0.6)",
      borderColor: "#3F51B5"
    },
    btn: { backgroundColor: "#3F51B5" },
    tickTxt: { backgroundColor: "#3F51B5" }
  };

  static navigationOptions = ({ navigation }) => ({
    header: HomeScreen.renderHeader(navigation)
  });

  static renderHeader(navigation) {
    return (
      <Appbar.Header>
        <Appbar.Content
          title="Rexnord Electronics"
          subtitle="Product Category"
        />
        <Appbar.Action
          icon="mail"
          onPress={HomeScreen.onPressContactUs(navigation)}
        />
        <Appbar.Action
          icon="home"
          onPress={HomeScreen.onPressAboutUs(navigation)}
        />
      </Appbar.Header>
    );
  }

  static onPressAboutUs(navigation) {
    return () => navigation.navigate("AboutUs");
  }

  static onPressContactUs(navigation) {
    return () => navigation.navigate("ContactUs");
  }

  static itemComponent(item, isSelected) {
    return (
      <ImageBackground
        style={HomeScreenStyles.itemComponentStyle}
        source={{
          uri: item.url
        }}
      >
        <View style={HomeScreenStyles.itemComponentViewStyle}>
          <Text style={HomeScreenStyles.itemComponentTextStyle}>
            {item.name}
          </Text>
        </View>

        {isSelected ? (
          <View style={HomeScreenStyles.itemComponentSelectedStyle} />
        ) : null}
      </ImageBackground>
    );
  }

  render() {
    return (
      <View style={HomeScreenStyles.container}>
        <ReactNativeItemSelect
          countPerRow={2}
          minSelectCount={1}
          floatSubmitBtn
          styles={this.reactNativeItemSelectStyle}
          lastRowMargin={65}
          data={rexnordData}
          itemComponent={HomeScreen.itemComponent}
          onSubmit={this.onSelectCategory()}
        />
      </View>
    );
  }

  onSelectCategory() {
    return item => {
      this.props.navigation.navigate("Product", { selectedItem: item });
    };
  }
}

export default HomeScreen;
