import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div className="p-6 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input 
              placeholder="Add a task..." 
              value={task} 
              onChange={(e) => setTask(e.target.value)} 
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          <div className="space-y-3">
            {todos.map((todo, index) => (
              <div key={index} className="flex items-center gap-3 p-2 border rounded">
                <Checkbox 
                  checked={todo.done} 
                  onCheckedChange={() => toggleTodo(index)} 
                />
                <span className={todo.done ? "line-through text-gray-500" : ""}>
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
