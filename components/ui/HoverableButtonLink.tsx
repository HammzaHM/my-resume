import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Easing,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  ExternalPathString,
  Href,
  Link,
  RelativePathString,
} from "expo-router";

type Props = {
  path: Href;
  text: string;
  isBlankLink?: boolean;
};

const colorAnimation = (animValue: SharedValue<number>) => {
  return interpolate(animValue.value, [0, 1], [255, 0]);
};

export const HoverableButtonLink = ({ path, text, isBlankLink }: Props) => {
  const animValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: `rgba(146, 147, 153,${interpolate(
        animValue.value,
        [0, 1],
        [1, 0]
      )})`,
      color: `
      rgb(${colorAnimation(animValue)},${colorAnimation(
        animValue
      )},${colorAnimation(animValue)})`,
      padding: 10,
      borderRadius: 5,
      fontSize: 16,
    };
  });

  return (
    <Pressable
      onHoverIn={() => {
        animValue.value = withTiming(0, {
          duration: 400,
          easing: Easing.ease,
        });
      }}
      onHoverOut={() => {
        animValue.value = withTiming(1, {
          duration: 400,
          easing: Easing.ease,
        });
      }}
    >
      <Link href={path} target={isBlankLink ? "_blank" : undefined}>
        <Animated.Text style={animatedStyle}>{text}</Animated.Text>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
