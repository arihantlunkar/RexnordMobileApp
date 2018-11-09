import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import EnquiryScreen from "../screens/EnquiryScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import ContactUsScreen from "../screens/ContactUsScreen";

const Navigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Product: { screen: ProductScreen },
    Enquiry: { screen: EnquiryScreen },
    AboutUs: { screen: AboutUsScreen },
    ContactUs: { screen: ContactUsScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default Navigation;
