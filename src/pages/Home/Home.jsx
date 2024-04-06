import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.mainBlock}>
      <p className={css.text}>
        Hello, this application will help you save the phone numbers of your
        friends, colleagues and just important numbers that can always be at
        hand. It is not necessary to carry a large notebook with you, a mobile
        phone will be enough to enter the application and simply use the search
        field to find the number you need. We hope you find this application
        useful. All the best!
      </p>
      {!isLoggedIn && (
        <p className={css.textLast}>
          If you want to see a your phone numbers, please to{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Login
          </Link>{" "}
          in this application.
        </p>
      )}
    </div>
  );
};

export default Home;
