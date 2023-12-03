import { useState } from "react"
import Space from "./space"
import Child from "./Child";

const Parent = ({ children }) => {
    const [value, setValue] = useState(0);

  return (
    <div style={
        {height: "200px",
         width: "300px",
          border: "1px solid black",
          display: "flex",
        flexDirection: "column",
        gap: "10px",
          alignItems: "center",
          justifyContent: "center"
    }}>
        <span>{value}</span>

        {children}
        {/* <Child value = {value} setValue = {setValue}/> */}
    </div>
  )
}

export default Parent