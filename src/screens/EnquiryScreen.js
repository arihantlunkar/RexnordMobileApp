import React from "react";
import { Appbar, TextInput, Button } from "react-native-paper";
import { View, ScrollView, Text } from "react-native";
import EnquiryScreenStyles from "../assets/css/EnquiryScreenStyles";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

export default class EnquiryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: EnquiryScreen.renderHeader(navigation)
  });

  static renderHeader(navigation) {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={EnquiryScreen.onPressBack(navigation)} />
        <Appbar.Content title="Send Enquiry" subtitle="Request for Quotation" />
      </Appbar.Header>
    );
  }

  static onPressBack(navigation) {
    return () => navigation.navigate("Product");
  }

  constructor(props) {
    super(props);

    this.productName = this.props.navigation.state.params.selectedItem.characteristics[0].value;

    this.state = {
      name: "",
      email: "",
      mobile: "",
      product: this.productName,
      country: "",
      companyName: "",
      companyWebsite: "",
      message: "",
      error: "",
      typeOfCustomer: 0,
      typeOfCustomerRadioProps: [
        { label: "OEM", value: 0 },
        { label: "DEALER", value: 1 }
      ],
      nameValidate: false,
      emailValidate: false,
      mobileValidate: false,
      countryValidate: false
    };
  }

  sendEnquiry() {
    var data = {
      typeOfCustomer: this.state.typeOfCustomer,
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      product: this.state.product,
      message: this.state.message,
      country: this.state.country,
      companyName: this.state.companyName,
      companyWebsite: this.state.companyWebsite
    };

    fetch("http://www.eaback.com/automation/SendMailRexnord.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        this.messageSent = true;
        return response.json();
      })
      .then(function(data) {
        this.messageSent = true;
      })
      .catch(error => {
        this.messageSent = true;
      })
      .done();

    this.setState({
      error: "Thank you for your enquiry! We will get back to you soon."
    });

    this.setState({ name: "" });
    this.setState({ email: "" });
    this.setState({ mobile: "" });
    this.setState({ country: "" });
    this.setState({ companyName: "" });
    this.setState({ companyWebsite: "" });
    this.setState({ message: "" });
    this.setState({ typeOfCustomer: 0 });
    this.setState({ nameValidate: false });
    this.setState({ emailValidate: false });
    this.setState({ mobileValidate: false });
    this.setState({ countryValidate: false });
  }

  validate(text, type) {
    if (type == "name") {
      regex = /^[a-zA-Z]+$/;
      if (regex.test(text)) {
        this.setState({ nameValidate: true });
      } else {
        this.setState({ nameValidate: false });
      }
    } else if (type == "country") {
      regex = /^[a-zA-Z]+$/;
      if (regex.test(text)) {
        this.setState({ countryValidate: true });
      } else {
        this.setState({ countryValidate: false });
      }
    } else if (type == "email") {
      regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
      if (regex.test(text)) {
        this.setState({ emailValidate: true });
      } else {
        this.setState({ emailValidate: false });
      }
    } else if (type == "mobile") {
      regex = /^\+[0-9]{1,3}[0-9]{10,11}$/;
      if (regex.test(text)) {
        this.setState({ mobileValidate: true });
      } else {
        this.setState({ mobileValidate: false });
      }
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View
            style={[
              EnquiryScreenStyles.marginBtn,
              EnquiryScreenStyles.typeOfCustomerView
            ]}
          >
            <Text style={EnquiryScreenStyles.typeOfCustomerTextView}>
              Customer Type :
            </Text>
            <RadioForm
              buttonColor={"#3F51B5"}
              buttonInnerColor={"#3F51B5"}
              formHorizontal={true}
              labelHorizontal={false}
              radio_props={this.state.typeOfCustomerRadioProps}
              initial={0}
              animation={false}
              onPress={this.onTypeOfCustomerChange()}
            />
          </View>
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Name"
            value={this.state.name}
            error={!this.state.nameValidate ? true : false}
            onChangeText={this.onNameChange()}
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Email"
            value={this.state.email}
            error={!this.state.emailValidate ? true : false}
            onChangeText={this.onEmailChange()}
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Mobile"
            placeholder="+XXXXXXXXXXXX"
            value={this.state.mobile}
            error={!this.state.mobileValidate ? true : false}
            onChangeText={this.onMobileChange()}
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Product Name"
            value={this.state.product}
            disabled
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Country"
            value={this.state.country}
            error={!this.state.countryValidate ? true : false}
            onChangeText={this.onCountryChange()}
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Company Name"
            value={this.state.companyName}
            onChangeText={this.onCompanyNameChange()}
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Company Website"
            value={this.state.companyWebsite}
            onChangeText={this.onCompanyWebsiteChange()}
          />
          <TextInput
            style={EnquiryScreenStyles.margin}
            mode="outlined"
            label="Message (Optional)"
            value={this.state.message}
            onChangeText={this.onMessageChange()}
            multiline
            numberOfLines={5}
          />
          <Button
            style={EnquiryScreenStyles.marginBtn}
            mode="contained"
            onPress={this.onPressSubmit()}
          >
            Send
          </Button>
          <Text
            style={[EnquiryScreenStyles.error, EnquiryScreenStyles.marginBtn]}
          >
            {this.state.error}
          </Text>
          <View style={EnquiryScreenStyles.emptyView} />
        </ScrollView>
      </View>
    );
  }

  onTypeOfCustomerChange() {
    return value => {
      this.setState({ typeOfCustomer: value });
    };
  }

  onPressSubmit() {
    return () => {
      this.setState({ error: "" });
      if (!this.state.nameValidate) {
        this.setState({ error: "Name is Invalid" });
      } else if (!this.state.emailValidate) {
        this.setState({ error: "Email is Invalid" });
      } else if (!this.state.mobileValidate) {
        this.setState({ error: "Mobile is Invalid" });
      } else if (!this.state.countryValidate) {
        this.setState({ error: "Country is Invalid" });
      } else {
        this.setState({ error: "Sending ..." });
        this.sendEnquiry();
      }
    };
  }

  onMessageChange() {
    return message => {
      return this.setState({ message });
    };
  }

  onCompanyWebsiteChange() {
    return companyWebsite => this.setState({ companyWebsite });
  }

  onCompanyNameChange() {
    return companyName => {
      return this.setState({ companyName });
    };
  }

  onCountryChange() {
    return country => {
      this.setState({ country });
      this.validate(country, "country");
    };
  }

  onMobileChange() {
    return mobile => {
      this.setState({ mobile });
      this.validate(mobile, "mobile");
    };
  }

  onEmailChange() {
    return email => {
      this.setState({ email });
      this.validate(email, "email");
    };
  }

  onNameChange() {
    return name => {
      this.setState({ name });
      this.validate(name, "name");
    };
  }
}
