import MainButton from "../../Components/MainButton/MainButton";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div id="designGuidelines">
        <h1>Design Guidelines: </h1>
        <b>Header Size:</b> h1 or 2rem
        <br />
        <b>Body Size:</b> 1rem
        <br />
        <b>Light Color:</b> #ffe7bf
        <br />
        <b>Dark Color:</b> #203c32
        <br />
        Use material ui when possible
        <br />
        Mostly left justify text
        <br />
        1px solid #203c32 for lines/borders
        <br />
        Mostly capitalize text
      </div>

      <MainButton>example button</MainButton>
    </div>
  );
};

export default Home;
