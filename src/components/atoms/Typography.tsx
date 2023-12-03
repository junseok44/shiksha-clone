import { View, Text } from "react-native";

const Typography = ({
  variant,
  children,
  size = 16,
  color = "black",
  weight = "500",
}: {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
