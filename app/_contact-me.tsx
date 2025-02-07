import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

export const ContactMe = () => {
  return (
    <ThemedView lightColor="#FFFFFF" darkColor="#050212">
      <ThemedText>Contact Me</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});
