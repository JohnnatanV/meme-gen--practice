import "./App.css";
import html2canvas from "html2canvas";
import { useState } from "react";

function App() {
  const title = "Meme Generator on ReactJS";
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [memeImg, setMemeImg] = useState("aliens");

  const changeLine1 = (event) => setLine1(event.target.value);
  const changeLine2 = (event) => setLine2(event.target.value);
  const changeImage = (event) => setMemeImg(event.target.value);
  const onClickBtnExport = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");

      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <main className="App-body">
        {/* Select picker de memes */}
        <select className="meme-picker" onChange={changeImage}>
          <option value="aliens">Giorgio</option>
          <option value="cry">First World Problems</option>
          <option value="doggie">Doggie</option>
          <option value="fire">Niña en llamas</option>
          <option value="fry">Fry - Futurama</option>
          <option value="grandma">Grandma</option>
          <option value="if">Just if...</option>
          <option value="leo-1">Leonardo meme 1</option>
          <option value="leo-2">Leonardo meme 2</option>
          <option value="simple">Is simple...</option>
          <option value="smart-guy">Think about it</option>
          <option value="success-kid">Succes Kid</option>
          <option value="toys">Toys Everywhere</option>
          <option value="you-guys">You guys...</option>
        </select>
        {/* Meme */}
        <div className="meme-box" id="meme">
          <img className="meme-img" src={`/img/${memeImg}.png`} alt="meme" />
          <span className="meme-text line-1">{line1}</span>
          <span className="meme-text line-2">{line2}</span>
        </div>

        {/* Meme content */}
        <div className="text-box">
          <input
            type="text"
            placeholder="Text 1"
            className="meme-input"
            onChange={changeLine1}
          />
          <input
            type="text"
            placeholder="Text 2"
            className="meme-input"
            onChange={changeLine2}
          />
        </div>

        {/* Btn */}
        <div className="btn-primary">
          <button onClick={onClickBtnExport} className="btn">
            Export
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
