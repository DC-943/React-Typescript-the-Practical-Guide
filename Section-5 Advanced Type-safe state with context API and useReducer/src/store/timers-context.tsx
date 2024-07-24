import { type ReactNode, createContext, useContext, useReducer } from "react"

export type Timer = {
  name: string
  duration: number
}

type TimersState = {
  isRunning: boolean
  timers: Timer[]
}
const initialState: TimersState = {
  isRunning: true,
  timers: [],
}

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}
const TimersContext = createContext<TimersContextValue | null>(null)

export function useTimersContext() {
  const timersCtx = useContext(TimersContext)
  if (timersCtx === null) {
    throw new Error("TimersContext is null, that should not be the case")
  }
  return timersCtx
}

type TimersContextProviderProps = {
  children: ReactNode
}
type StartTimersAction = {
  type: "START_TIMERS"
}
type StopTimersAction = {
  type: "STOP_TIMERS"
}
type AddTimersAction = {
  type: "ADD_TIMERS"
  payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimersAction

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "ADD_TIMERS":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      }
    case "START_TIMERS":
      return {
        ...state,
        isRunning: true,
      }
    case "STOP_TIMERS":
      return {
        ...state,
        isRunning: false,
      }
    default:
      return state
  }
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData })
    },
    startTimers() {
      dispatch({ type: "START_TIMER" })
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMER" })
    },
  }
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
