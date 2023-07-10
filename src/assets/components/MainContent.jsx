import Form from "./Form";
import Card from "./Card";
import CardMusic from "./CardMusic";
import guitar from "../img/guitar.svg";
import jazz from "../img/jazz.svg";
import times from "../img/times.svg";

const MainContent = () => {
  return (
    <main className="main">
      <section className="main__section-one">
        <Form />
        <Card />
        <h2>Discover</h2>
        <CardMusic color={"pink"} title={"Guitar"} tracks={"50 Tracks"} img={guitar} />
        <CardMusic color={"aquamarine"} title={"Jazz Holic"} tracks={"25 Tracks"} img={jazz} />
        <CardMusic color={"blue"} title={"Good times"} tracks={"20 Tracks"} img={times} />
      </section>

      <section className="main__section-two">
        <h1 className="sidebar__container-title">Mozika</h1>
      </section>
    </main>
  );
};

export default MainContent;
