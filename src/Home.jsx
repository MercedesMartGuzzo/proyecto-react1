import violin from "../images/violin.jpg"

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "peru", fontSize: "1rem", marginTop: "10px" }}>
        Home
      </h1>
      <h2>subtitulo</h2>
      <img src={violin} alt="" />
    </div>
  );
};

export default Home;
