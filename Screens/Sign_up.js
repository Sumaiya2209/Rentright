import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleSignUp = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you can connect Firebase or your backend
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>

            {/* Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />

            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            {/* Password Input */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={secure}
                value={password}
                onChangeText={setPassword}
              />
              <Pressable onPress={() => setSecure(!secure)}>
                <Text style={styles.showText}>{secure ? "Show" : "Hide"}</Text>
              </Pressable>
            </View>

            {/* Sign Up Button */}
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && { opacity: 0.7 }
              ]}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            {/* Already have an account */}
            <Pressable
              onPress={() => navigation?.navigate("SignIn")}
              style={{ marginTop: 15 }}
            >
              <Text style={styles.signinText}>
                Already have an account? <Text style={{ fontWeight: "bold", color: "#0F4C5C" }}>Sign In</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0F4C5C",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F1F5F9",
    padding: 14,
    borderRadius: 20,
    marginBottom: 15,
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordInput: {
    color: "#333",
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
  },
  showText: {
    color: "#0F4C5C",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#0F4C5C",
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signinText: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
  },
});
