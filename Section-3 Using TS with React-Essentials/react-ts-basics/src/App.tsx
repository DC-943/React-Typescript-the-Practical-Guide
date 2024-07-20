import Header from "./components/Header.tsx"
import goalsImg from "./assets/goals.jpg"
import { useState } from "react"
import CourseGoalList from "./components/CourseGoalList.tsx"
import NewGoal from "./components/NewGoal.tsx"

export type CourseGoal = {
  title: string
  description: string
  id: number
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])
  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
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
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} />
      {/* <CourseGoal title="Learn React+TS">
        <p>Learn it from the ground up</p>
      </CourseGoal> */}
    </main>
  )
}
