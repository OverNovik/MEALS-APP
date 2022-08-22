import { Text, View } from "react-native";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal Details ({mealId})</Text>
    </View>
  );
};

export default MealDetailsScreen;
