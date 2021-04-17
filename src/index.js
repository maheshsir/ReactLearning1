import ReactDOM from "react-dom";

var style = {
  color: "Red",
  border: "20px"
};
const image1 = "https://picsum.photos/200";
const image2 = "https://picsum.photos/200/300";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h2 style={style}>My First React App</h2>
    <ul>
      <li>
        <img
          className="food-img"
          src={image1 + "?greyscale"}
          alt="Mahesh"
        ></img>
      </li>
      <li>
        <img className="food-img" src={image2} alt="Mahesh"></img>
      </li>
    </ul>
  </div>,
  rootElement
);
