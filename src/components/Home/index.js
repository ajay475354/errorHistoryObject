import "./index.css";
import Header from "../Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg_container">
        <div className="details_container">
          <div className="content_data">
            <h1 className="heading_home">Clothes That Get YOU Noticed</h1>
            <p className="content_home">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="home_button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="home_image"
            className="home_image"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
