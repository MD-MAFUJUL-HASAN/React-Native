import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Stopwatch = () => {
  const [millis, setMillis] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      const startTime = Date.now() - millis;
      const id = setInterval(() => {
        setMillis(Date.now() - startTime);
      }, 10);
      setIntervalId(id);
    }
  };

  const stop = () => {
    if (running) {
      setRunning(false);
      clearInterval(intervalId);
    }
  };

  const reset = () => {
    setMillis(0);
    if (running) {
      clearInterval(intervalId);
      setRunning(false);
    }
  };

  const formatTime = (timeInMillis) => {
    const minutes = Math.floor(timeInMillis / 60000);
    const seconds = Math.floor((timeInMillis % 60000) / 1000);
    const milliseconds = Math.floor((timeInMillis % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(millis)}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={start}>
          <Text style={styles.buttonLabel}>{running ? "Pause" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stop}>
          <Text style={styles.buttonLabel}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonLabel}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 48,
    marginBottom: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Stopwatch;
