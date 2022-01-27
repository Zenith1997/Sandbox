import { StrictMode } from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/580";

const customStyle = {
  color: "red",
  fontSize: "30px",
  border: "2px solid green"
};

customStyle.color = "pink";
customStyle.border = "5px dotted  ";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello Zenith</h1>
    <img src={img + "?grayscale"} />
  </div>,
  rootElement
);
