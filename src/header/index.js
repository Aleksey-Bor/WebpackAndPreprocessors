import htmlToElement from "../utils/htmlToElement";
import Header from "./index.html";
import Button from "../button/index";
import "./index.scss";

const header = htmlToElement(Header);
const customButton = Button({
  onClick: () => console.log("Click"),
  title: "Click me!",
  className: "header-button",
});
header.appendChild(customButton);

export default header;
