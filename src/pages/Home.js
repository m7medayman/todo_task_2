import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const { navigate } = useNavigation();

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem('todos');
      if (stored) setTodos(JSON.parse(stored));
    })();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const handleAddTodo = (todo) => {
    todo.completed = false;
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
        Todo App
      </Text>

      <TodoForm onSubmit={(todo) => handleAddTodo(todo)} />

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => navigate(PATHS.DETAILS, { name: 'Ahmed', age: 90 })}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      {todos.length > 0 && <Todos todos={todos} onDelete={handleDeleteTodo} onComplete={handleCompleteTodo} />}
    </View>
  );
};

export default Home;
