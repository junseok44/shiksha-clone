import React from "react";
import { Pressable, Text, View } from "react-native";
import { palette } from "../../utils/palette";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Icons from "../atoms/Icons";
import Typography from "../atoms/Typography";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: palette.orange }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16, // Adjust padding as needed
          height: 60, // Adjust height as needed
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

Header.Icon = () => (
  <Icons type="font-awesome" name="hamburger" size={30} color="white" />
);

Header.Title = ({ children }: { children: string }) => (
  <Typography color="white" size={20} weight="bold">
    {children}
  </Typography>
);

Header.GoBack = ({ onPressGoBack }: { onPressGoBack: () => void }) => {
  return (
    <Pressable
      onPress={onPressGoBack}
      style={{
        position: "absolute",
        left: 12,
        width: 50,
      }}
    >
      <Icons type="ant" name="arrowleft" size={30} color="white" />
    </Pressable>
  );
};

// Header.GoBack = ({ onPressGoBack }: { onPressGoBack: () => void }) => {
//   const inset = useSafeAreaInsets();

//   return (
//     <View
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         height: HeaderHeight,
//       }}
//     >
//       <SafeAreaView
//         edges={["top"]}
//         style={{
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }}
//       >
//         <Pressable onPress={onPressGoBack}>
//           <Icons type="ant" name="arrowleft" size={30} color="white" />
//         </Pressable>
//       </SafeAreaView>
//     </View>
//   );
// };

export default Header;
