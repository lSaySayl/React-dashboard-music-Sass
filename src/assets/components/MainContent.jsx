import Form from "./Form";
import Card from "./Card";
import CardMusic from "./CardMusic";
import guitar from "../img/guitar.svg";
import jazz from "../img/jazz.svg";
import times from "../img/times.svg";
import User from "./User";
import Artist from "./Artist";
import artistOne from "../img/artistone.svg";
import artistTwo from "../img/artisttwo.svg";
import artistThree from "../img/artistthree.svg";

const MainContent = () => {
  return (
    <main className="main">
      <section className="main__section-one">
        <Form />
        <Card />
        <h2>Discover</h2>
        <section className="main__section-one-cards">
          <CardMusic
            color={"pink"}
            title={"Guitar"}
            tracks={"50 Tracks"}
            img={guitar}
          />
          <CardMusic
            color={"aquamarine"}
            title={"Jazz Holic"}
            tracks={"25 Tracks"}
            img={jazz}
          />
          <CardMusic
            color={"blue"}
            title={"Good times"}
            tracks={"20 Tracks"}
            img={times}
          />
        </section>
      </section>

      <section className="main__section-two">
        <User />
        <h2>Favorite artist</h2>
        <Artist
         artist={artistThree}
         name={"Michael Jackson"}
         album={"Thriller"} />
          <Artist
         artist={artistTwo}
         name={"Michael Jackson"}
         album={"Thriller"} />
          <Artist
         artist={artistOne}
         name={"Michael Jackson"}
         album={"Thriller"} />
      </section>
    </main>
  );
};

export default MainContent;
