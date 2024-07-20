import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGaol } from "../App.tsx"
import InfoBox from "./infobox.tsx"
import { ReactNode } from "react"
type CourseGoalListProps = {
  goals: CGaol[]
  onDeleteGoal: (id: number) => void
}

let warningBox: ReactNode
if (CourseGoalList.length >= 4) {
  warningBox = (
    <InfoBox mode="warning">
      You are collecting a lot of goals. Don't put too much on your plate
    </InfoBox>
  )
}
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  {
    warningBox
  }

  if (goals.length == 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet.Start adding me
      </InfoBox>
    )
  }

  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}
