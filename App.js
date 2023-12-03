import { RecoilRoot } from "recoil";
import RootStackNavigator from "./src/navigator/RootStackNavigator";

export default function App() {
  return (
    <RecoilRoot>
      <RootStackNavigator></RootStackNavigator>
    </RecoilRoot>
  );
}
