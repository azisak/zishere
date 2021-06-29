import { useTheme } from "next-themes"
import nightwind from "nightwind/helper"
import {useState} from "react";

export default function Toggle(props) {
  const { theme, setTheme } = useTheme()

  const [checked, setChecked] = useState(theme === "dark");
  const toggle = () => {
    nightwind.beforeTransition()
    setChecked(theme !== "dark");
    if (theme !== "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input defaultChecked={checked} onClick={toggle}  type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
  )
}