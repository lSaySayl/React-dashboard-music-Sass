import { RiSunFill, RiCloudy2Fill } from "react-icons/ri";
const Card = () => {
  return (
    <section className="main_section-one card">
      <section className="card__container">
        <h1 className="card__container-title">Hello, Yassine !</h1>
        <p className="card__container-subtitle">
          Welcome home ! the air quality is good & fresh
        </p>
        <section className="card__container-icons">
          
            <section className="card__container-icons-temperature">
              <RiSunFill />
              <span>+ 25 C°</span>
            </section>

            <section className="card__container-icons-temperature">
              <RiCloudy2Fill />
              <span>Fuzzy cloudy weather</span>
            </section>
      
        </section>
      </section>
    </section>
  );
};

export default Card;
