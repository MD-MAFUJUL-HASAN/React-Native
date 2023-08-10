import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("./images/Tonmoy.jpg")}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
      </View>

      {/* Name */}
      <View style={styles.fieldContainer}>
        <Icon name="user" size={20} color="#555" />
        <Text style={styles.fieldText}>MD MAFUJUL HASAN</Text>
      </View>

      {/* Address */}
      <View style={styles.fieldContainer}>
        <Icon name="map-marker" size={20} color="#555" />
        <Text style={styles.fieldText}>
          G-20/9, BOF R/A, Gazipur Cantonment
        </Text>
      </View>

      {/* Designation */}
      <View style={styles.fieldContainer}>
        <Icon name="briefcase" size={20} color="#555" />
        <Text style={styles.fieldText}>Student of Sonargaon University</Text>
      </View>

      {/* Mobile Number */}
      <View style={styles.fieldContainer}>
        <Icon name="phone" size={20} color="#555" />
        <Text style={styles.fieldText}>+880 193 277 1015</Text>
      </View>

      {/* Email Address */}
      <View style={styles.fieldContainer}>
        <Icon name="envelope" size={20} color="#555" />
        <Text style={styles.fieldText}>mdtonmoy13.mt@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  fieldText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
});

export default ProfilePage;
