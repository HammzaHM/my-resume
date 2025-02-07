import { HoverableButtonLink } from "@/components/ui/HoverableButtonLink";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, View } from "react-native";

import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Images } from "@/constants/Images";
import { Ionicons } from "@expo/vector-icons";

const Header = () => (
  <ThemedView style={styles.header} lightColor="#FFFFFF" darkColor="#FFFFFF">
    <ThemedView
      style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
      lightColor="#FFFFFF"
      darkColor="#FFFFFF"
    >
      <HelloWave />
    </ThemedView>
    <ThemedView
      darkColor="#FFFFFF"
      style={{
        flexDirection: "row",
        columnGap: 20,
      }}
    >
      <HoverableButtonLink path="/_contact-me" text="Works" />
      <HoverableButtonLink path="/blog" text="Blog" />
      <HoverableButtonLink path="/_contact-me" text="Let‘s Connect!" />
    </ThemedView>
  </ThemedView>
);

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <ThemedView style={styles.detailsContainer} darkColor="#fff">
          <View style={{ padding: 20, maxWidth: "30%", flex: 1 }}>
            <ThemedText
              style={{
                color: Colors.light.text,
                fontWeight: "bold",
                fontSize: 44,
                lineHeight: 60,
                fontFamily: "Heebo_700Bold",
                marginBottom: 20,
              }}
            >
              Hi, I‘m Hamza Hmem, {"\n"}Senior Mobile Engineer {"\n"}
            </ThemedText>
            <ThemedText type="subtitle" style={styles.bio}>
              With a 5+ years of experience in Mobile development industry, I am
              pretty confident in my skills to convert any dream or idea into a
              real, user-friendly and scalable mobile application. Throughout my
              career, I have worked on various applications with different
              complexify, from simple to complex, from small to large scale.
              {"\n"}I am really eager for new challenges and opportunities,
              don‘t hesitate to contact me
            </ThemedText>
            <DownloadResumeButton />
          </View>
          <View style={styles.myImageContainer}>
            <View style={styles.myImageBackground} />
            <Image
              source={Images.myImage}
              style={styles.myImage}
              contentFit="cover"
            />
          </View>
        </ThemedView>
      </ScrollView>
      <ThemedView
        style={{
          paddingVertical: 20,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
        darkColor="white"
      >
        <View
          style={{
            flexDirection: "row",
            gap: 30,
          }}
        >
          {["twitter", "linkedin", "github"].map((value, index) => (
            <Ionicons
              name={`logo-${value}` as any}
              key={"KEY_" + index + value}
              size={30}
            />
          ))}
        </View>
        <ThemedText lightColor="#000000" darkColor="#000000">
          Copyright @2025 All Rights Reserved
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  header: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: undefined,
    paddingVertical: 20,
    paddingHorizontal: 100,
    zIndex: 100,
    gap: 7,
    padding: 8,
  },
  detailsContainer: {
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  myImageContainer: {
    alignItems: "center",
    position: "relative",
  },
  myImageBackground: {
    position: "absolute",
    right: 100,
    top: 8,
    backgroundColor: Colors.light.mainImageBackgroundColor,
    width: 245,
    height: 245,
    borderRadius: 123,
  },
  bio: {
    color: "#21243D",
    fontSize: 17.5,
  },
  myImage: {
    position: "absolute",
    right: 100,
    height: 240,
    width: 240,
    borderRadius: 240 / 2,
  },
  headerText: {
    color: "white",
    fontFamily: "Brush Script MT",
  },
  bannerImage: {
    height: 200,
    width: "100%",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
