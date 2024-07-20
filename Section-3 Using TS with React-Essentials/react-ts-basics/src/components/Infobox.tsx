import { type ReactDOM } from "react"

type InfoBoxProps = {
  mode: "hint" | "warning"
  children: React.ReactNode
}

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-warning">
        <p>{children}</p>
      </aside>
    )
  }

  return (
    <aside>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}
