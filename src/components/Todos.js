import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete ,onComplete }) => {
  return (
    <FlatList
      data={todos}
      style={styles.todosContainer}
      
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem todo={item} onDelete={onDelete} onComplete={onComplete} />}
    />
  );
};

export default Todos;
