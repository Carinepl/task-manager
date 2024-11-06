import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [taskName, setTaskName] = useState("")
  const [taskReporter, setTaskReporter] = useState("")
  const [taskTerm, setTaskTerm] = useState("")
  const [taskStatus, setTaskStatus] = useState("")

  const [taskList, setTaskList] = useState([])

  function handleTaskList() {
    const newTask = {
      name: taskName,
      reporter: taskReporter,
      term: taskTerm,
      status: taskStatus

    }

    setTaskList((state) => [...state, newTask])

    setTaskName("")
    setTaskReporter("")
    setTaskTerm("")
    setTaskStatus("")

  }

  function handleTaskChange(event) {
    console.log(event)
  }
  const estagiario = {
    name: "Carine",
    matricula: "900055",
    idade: 31,
    setor: "DTD"
  }

  const estagiario2 = {
    name: "Maria",
    matricula: "900054",
    idade: 19,
    setor: "DTD"
  }


  estagiario.name
  estagiario2.idade
  estagiario2.matricula


  const estagiario3 = {
    name: "Lucas",
    matricula: 2115,
    idade: 28,
    setor: "DTD"

  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleTaskReporterChange(event) {
    setTaskReporter(event.target.value);
  }

  function handleTaskTermChange(event) {
    setTaskTerm(event.target.value);
  }

  function handleTaskStatusChange(event) {
    setTaskStatus(event.target.value);
  }
  return (
    <>
      <h1>
        Criar Tarefa
      </h1>

      <div>
        <label htmlFor="taskName">
          Nome da tarefa:
          <input id="taskName"value={taskName} onChange={(event) => handleTaskNameChange(event)} />
        </label>
      </div>


      <div>
        <label htmlFor="taskReporter">
          Responsavel:
          <input id="taskReporter" value={taskReporter} onChange={(event) => handleTaskReporterChange(event)} />
        </label>
      </div>

      <div>
        <label htmlFor="taskTerm">
          Prazo:
          <input id="taskTerm" type="date" value={taskTerm} onChange={(event) => handleTaskTermChange(event)} />
        </label>

      </div>


      <div>
        <label htmlFor="taskStatus">
          Status:
          <input id="taskStatus" value={taskStatus} onChange={(event) => handleTaskStatusChange(event)} />
        </label>
      </div>

      <button onClick={handleTaskList}> Criar </button>

      {taskList.map((task) => {
        return (
          // TODO: UUID
          <div key={`${task.term}${task.name}`}>
            <p>{task.name}</p>
            <p>{task.reporter}</p>
            <p>{task.term}</p>
            <p>{task.status}</p>
            <p>-----</p>
          </div>
        )
      })}
    </>
  )
}

export default App

const idade = 2
console.log("a minha idade é " + idade)
//a minha idade é 2
console.log(`a minha idade é ${idade}`) 