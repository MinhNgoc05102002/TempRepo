import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {

  const context = useContext(ThemeContext)

    return (
      <p className={context.theme}>
        tai vi sao anh hay noi di, hay vi em vo tam hung ho, nen vo tinhh, danh mat doi ta
      </p>
    )
  }
  
  export default Paragraph