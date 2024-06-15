import Header from "./components/Header.tsx"
import goalsImg from "./assets/goals.jpg"
import { useState } from "react"
import CourseGoalList from "./components/CourseGoalList.tsx"
export default function App() {
  export type CourseGoal = {
    title: string
    description: string
    id: number
  }
  const [goals, setGoals] = useState<CourseGoal[]>([])
  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: "Learn React + TS",
      description: "Learn it in depth!",
    }
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal]
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
      {/* <CourseGoal title="Learn React+TS">
        <p>Learn it from the ground up</p>
      </CourseGoal> */}
    </main>
  )
}
