import { View, Text } from "react-native";
import CommentList from "../components/organisms/CommentList";
import Container from "../components/atoms/Container";
import { ScrollView } from "react-native-gesture-handler";

const ReviewListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Container
        styles={{ backgroundColor: "white", paddingVertical: 20, flex: 1 }}
      >
        <ScrollView>
          <CommentList></CommentList>
        </ScrollView>
      </Container>
    </View>
  );
};

export default ReviewListScreen;
