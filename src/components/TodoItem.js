import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoItem = ({ todo, onDelete, onComplete }) => {
  return (
    <View style={todo.completed ? styles.completedTodo : styles.todoItem}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}> {String(todo.title)}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onComplete(todo.id)}>
          <AntDesign name={todo.completed ? "closecircle" : "checkcircle"} size={20} color={todo.completed ? "red" : "green"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
