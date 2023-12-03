import React from "react";
import { Text, View } from "react-native";
import { getHeaderTitleFromRoutes } from "../../utils/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icons from "../atoms/Icons";
import { palette } from "../../utils/palette";

const BottomTabItem = ({ route, navigation }) => {
  return (
    <View>
      <Text>BottomTabItem</Text>
    </View>
  );
};

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        paddingHorizontal: 20,
        flexDirection: "row",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          // <View
          //   key={route.key}
          //   style={{
          //     flex: 1,
          //     backgroundColor: "red",
          //     height: 40,
          //     justifyContent: "center",
          //     alignItems: "center",
          //   }}
          // >
          //   <Text>dfdfd</Text>
          // </View>
          <View key={route.key} style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {label === "FavoriteScreen" ? (
                <Icons
                  type="ant"
                  name="star"
                  size={30}
                  color={isFocused ? palette.orange : palette.font_grey}
                />
              ) : label === "MenuScreen" ? (
                <Icons
                  type="material"
                  name="restaurant-menu"
                  size={30}
                  color={isFocused ? palette.orange : palette.font_grey}
                />
              ) : label === "SettingsNavigator" ? (
                <Icons
                  type="material"
                  name="settings"
                  size={30}
                  color={isFocused ? palette.orange : palette.font_grey}
                />
              ) : null}
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default BottomTabBar;
