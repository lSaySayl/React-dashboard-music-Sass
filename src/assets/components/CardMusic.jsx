// eslint-disable-next-line react/prop-types
const CardMusic = ({ title, tracks, img,color }) => {
  return (
    <section className={`card__music-${color}`}>
      <section className="card__music-text">
        <h3>{title}</h3>
        <p>{tracks}</p>
      </section>
      <img className="card_music-img" src={img} alt={title} />
    </section>
  );
};

export default CardMusic;
