import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Asset } from "expo-asset";

import { Colors } from "@/constants/Colors";
import { PDFs } from "@/assets/PDFs";
import { ThemedText } from "./ThemedText";

export const DownloadResumeButton = () => {
  const openPdf = async () => {
    const pdfAsset = Asset.fromModule(PDFs.myResume);
    await pdfAsset.downloadAsync();

    const localUri = pdfAsset.localUri || pdfAsset.uri;

    if (Platform.OS === "web") {
      window.open(localUri, "_blank");
    } else {
      await WebBrowser.openBrowserAsync(localUri);
    }
  };

  return (
    <Pressable style={styles.button} onPress={openPdf}>
      <ThemedText style={{ color: Colors.dark.text }}>
        Download my resume
      </ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.downloadResume,
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginTop: 15,
    alignItems: "center",
    maxWidth: 200,
    borderRadius: 7,
  },
});
