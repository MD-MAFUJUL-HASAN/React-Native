import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState(" ");

  const handleNumberPress = (number) => {
    setInput(input + number);
  };

  const handleOperatorPress = (operator) => {
    if (input !== "") {
      setInput(input + operator);
    }
  };

  const handleClearPress = () => {
    setResult(0);
    setInput(" ");
  };

  const handleEqualsPress = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleClearPress()}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqualsPress()}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorPress("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorPress("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorPress("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorPress("/")}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  result: {
    fontSize: 36,
    fontWeight: "bold",
  },
  displayContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 20,
  },
  displayText: {
    fontSize: 30,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
