const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center"
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 30,
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#b7076b",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 3,
    marginRight: 10,
    marginTop:20,
  },
  checkbox: {
    width: 12,
    height: 12,
    backgroundColor: "transparent",
  },
  checked: {
    backgroundColor: "#B7076B",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 8,
  
    backgroundColor: 'white',
    width:300,
    height: 60,
    marginTop: 50,
  },
  icon: {
    marginRight: 8,
    marginStart:20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  containerCategories: {
      marginTop:40,
      padding:2,
      marginStart:-15,
      },
  
    errorText: {
      color: 'red', // Change this line to set the color to red
      fontSize: 14,
      marginTop: 5,
    },
});
export default styles;