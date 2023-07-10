import { RiArrowDownSLine } from "react-icons/ri";
import notification from "../img/notification.svg";
import user from "../img/user.svg"

const User = () => {
  return (
    <section className="user">
      <img className="user__notification" src={notification} alt="" />
      <section className="user__profile">
        <RiArrowDownSLine className="user__profile-icon"/>
        <section>
          <span className="user__profile-name">Yassine Ben Salem</span>
          <p>Your profil</p>
        </section>
      </section>
      <img className="user__img" src={user} alt="" />
    </section>
  );
};

export default User;
