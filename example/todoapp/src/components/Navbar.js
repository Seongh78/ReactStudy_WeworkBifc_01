const Navbar = (props) => {
  const { background } = props;

  return (
    <nav className="navbar navbar-dark " style={{ background }}>
      <span className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Lens_-_new_logo.png/600px-Google_Lens_-_new_logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Bootstrap - {background}
      </span>
    </nav>
  );
};

export default Navbar;
