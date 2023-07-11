import Button from "./Button";

const Artist = ({ artist, name, album }) => {
  return (
    <section className="artist">
      <img src={artist} />
      <section className="artist__info">
        <span className="artist__info-name">{name}</span>
        <p className="artist__info-album">{album}</p>
      </section>
      <Button/>
    </section>
  );
};

export default Artist;
