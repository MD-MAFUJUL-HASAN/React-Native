import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (username.length === 0) {
      setUsernameError("This field is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8 || password.length > 16) {
      setPasswordError("Password length must be 8-16 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid");
      // Add your logic here to handle the form submission
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default App;
