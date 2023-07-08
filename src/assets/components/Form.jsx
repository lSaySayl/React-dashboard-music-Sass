import { RiSearch2Fill } from "react-icons/ri";
import filter from "../img/filter.svg";

const Form = () => {
  return (
    <form className="form">
      <section className="form__section">
        <label className="form__section-icon">
          <RiSearch2Fill />
        </label>
        <input
          className="form__section-input"
          type="text"
          placeholder="Search music, artist, categories..."
        />
      </section>
      <section className="form__button">
        <img className="form__button-img" src={filter} alt="filter" />
        <span className="form__button-text">Filters</span>
      </section>
    </form>
  );
};

export default Form;
