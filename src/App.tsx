import React, { useState } from 'react';
import { TaskAdd } from './components/TaskAdd';
import { Task } from './components/Task';

interface Task {
  id: number;
}

export function App() {
  // Estado para armazenar uma lista de componentes Task
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para ser chamada ao clicar no botão "Salvar"
  const handleSave = () => {
    const newTask = { id: Date.now() }; // Cria um Task com um id único
    setTasks([...tasks, newTask]);
  };

  // Função para remover um Task
  const handleRemove = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      {/* Componente TaskAdd passa a função handleSave para ser chamada ao clicar no botão */}
      <TaskAdd onSave={handleSave} />

      {/* Renderiza todos os componentes Task da lista */}
      {tasks.map(task => (
        <Task key={task.id} id={task.id} onContinue={() => handleRemove(task.id)} />
      ))}
    </div>
  );
}

export default App;
