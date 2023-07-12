import Button from "./Button";

const Artist = ({ artist, name, album }) => {
  return (
    <section className="artist">
      <section className="artist__info">
        <img src={artist} />
        <section>
          <span className="artist__info-name">{name}</span>
          <p className="artist__info-album">{album}</p>
        </section>
      </section>
      <Button />
    </section>
  );
};

export default Artist;
