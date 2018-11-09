import { StyleSheet, Dimensions } from "react-native";

const EnquiryScreenStyles = StyleSheet.create({
  margin: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  marginBtn: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  emptyView: {
    height: Dimensions.get("window").height / 2
  },
  error: {
    color: "#3F51B5",
    textAlign: "center"
  },
  typeOfCustomerTextView: {
    marginTop: 10
  },
  typeOfCustomerView: {
    flex: 2,
    flexDirection: "row"
  }
});

export default EnquiryScreenStyles;
