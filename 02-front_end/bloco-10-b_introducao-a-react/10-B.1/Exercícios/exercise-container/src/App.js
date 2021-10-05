import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar', 'Lavar roupa', 'Dormir'];

function App() {
  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        { tarefas.map((tarefa) => Task(tarefa) ) }
      </ul>
    </div>
  );
}

export default App;
