import { menu, playlist, settings } from "../variables/index";
import logo from "../img/logo.svg";

const Sidebar = () => {
  const renderItems = (items) => {
    return items.map((item) => (
      <section className="sidebar__content-item" key={item.name}>
        <span className="sidebar__content-item-icon">{item.icon}</span>
        <p className="sidebar__content-item-name">{item.name}</p>
      </section>
    ));
  };

  return (
    <section className="sidebar">
      <section className="sidebar__container">
        <img src={logo} alt="logo" />
        <h1 className="sidebar__container-title">Mozika</h1>
      </section>
      <section className="sidebar__content">
        <span className="sidebar__content-span">Menu</span>
        {renderItems(menu)}
        <span className="sidebar__content-span">Playlist</span>
        {renderItems(playlist)}
        {renderItems(settings)}
      </section>
      <section className="sidebar__footer">
        <h2>Developed by - Camilo</h2>
        <span>Copyright© - 2023</span>
      </section>
    </section>
  );
};

export default Sidebar;
