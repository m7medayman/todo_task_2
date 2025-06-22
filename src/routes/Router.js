import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; 
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export const PATHS = {
  HOME: "Home Page",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === PATHS.HOME) {
              iconName = "home-outline";
            } else if (route.name === PATHS.COMPLETED_TASKS) {
              iconName = "checkmark-done-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={PATHS.HOME} component={StackNavigator} />
        <Tab.Screen name={PATHS.COMPLETED_TASKS} component={CompletedTasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
