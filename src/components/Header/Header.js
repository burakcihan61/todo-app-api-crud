import avatars from "../../assets/img/avatar.png";

const Header = () => {
  return (
    <div className="navbar">
      <span>To Do App</span>
      <div className="user">
        <span>
          <img className="userAvatar" src={avatars} alt="avatar" />
        </span>
        <div>{localStorage.getItem("username")}</div>
      </div>
    </div>
  );
};

export default Header;
