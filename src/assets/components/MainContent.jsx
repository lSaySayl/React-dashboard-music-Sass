
import Form from "./Form";
import Card from "./Card";

const MainContent = () => {
  return (
    <main className="main">
      <section className="main__section-one">
        <Form />
        <Card/>
        <h1>A</h1>
      </section>

      <section className="main__section-two">
        <h1 className="sidebar__container-title">Mozika</h1>
      </section>
    </main>
  );
};

export default MainContent;
