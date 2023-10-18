import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Icons = ({
  type = "material",
  name,
  size = 20,
  color = "black",
}: {
  name: string;
  type: "material" | "ant";
  size?: number;
  color?: string;
}) => {
  if (type === "material")
    return <MaterialIcons name={name} size={size} color={color} />;
  else if (type === "ant")
    return <AntDesign name={name} size={size} color={color} />;
  else return null;
};

export default Icons;
