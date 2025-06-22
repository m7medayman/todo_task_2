import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector(state => state.todos);

  return (
    <FlatList
      data={todos}
      style={styles.todosContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
    />
  );
};

export default Todos;
