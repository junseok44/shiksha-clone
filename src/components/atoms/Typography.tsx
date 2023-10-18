import { View, Text } from "react-native";

const Typography = ({
  children,
  size = 16,
  color = "black",
  weight = "500",
}: {
  children: string;
  size?: number;
  color?: string;
  weight?: "500" | "600" | "bold";
}) => {
  return (
    <Text style={{ fontSize: size, color, fontWeight: weight }}>
      {children}
    </Text>
  );
};

export default Typography;
