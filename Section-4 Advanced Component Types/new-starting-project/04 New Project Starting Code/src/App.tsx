import { useRef } from "react"
import Button from "./components/Button.tsx"
import Container from "./components/Container.tsx"
import Input from "./components/input.tsx"
import Form, { type FormHandle } from "./components/Form.tsx"
function App() {
  const customForm = useRef<FormHandle>(null)
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: number }
    console.log(extractedData)
    customForm.current?.clear()
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App
