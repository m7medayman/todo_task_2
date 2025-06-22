import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../features/todos/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <View style={todo.completed ? styles.completedTodo : styles.todoItem}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>{String(todo.title)}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity onPress={() => dispatch(deleteTodo(todo.id))}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(toggleComplete(todo.id))}>
          <AntDesign
            name={todo.completed ? "closecircle" : "checkcircle"}
            size={20}
            color={todo.completed ? "red" : "green"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
