// eslint-disable-next-line react/prop-types
const CardMusic = ({ title, tracks, img }) => {
  return (
    <section className="card-music">
      <h2>{title}</h2>
      <p>{tracks}</p>
      <img src={img} alt={title} />
    </section>
  );
};

export default CardMusic;
