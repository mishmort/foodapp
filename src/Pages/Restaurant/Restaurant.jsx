import MainButton from "../../Components/MainButton/MainButton";
import "./restaurant.css";

const Restaurant = () => {
  const socialLinks = [
    { text: "The Beanery Facebook", url: "https://www.facebook.com/" },
    { text: "@thebeanerycafe", url: "https://twitter.com/" },
    { text: "@thebeanerycafe", url: "https://www.facebook.com/" },
    { text: "1+ 123 456 9000", url: "https://twitter.com/" },
    { text: "thebeanerycafe@gmail.com", url: "https://www.instagram.com/" },
  ];

  return (
    <div className="restaurant">
      <div className="coverPhoto">
        <div className="mainPhoto"></div>
      </div>
      <div className="infoRowOne">
        <div className="name">
          <h1>The Beanery Cafe</h1>
        </div>
        <div className="about">
          <h1 className="restaurantInfoTitle">About:</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="category">
          <div className="pricePoint">
            <h1 className="restaurantInfoTitle">Price Point:</h1>
            <span className="dollars">$$$</span>
          </div>
          <div className="dietaryOptions">
            <h1 className="restaurantInfoTitle">Dietary Options:</h1>
            <div className="dietaryIcons">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoRowTwo">
        <div className="hours">
          <h1 className="restaurantInfoTitle">Hours:</h1>{" "}
          <div className="hoursList">
            <div className="times">
              12 AM to 4 PM
              <br />
              12 AM to 4 PM
              <br />
              Closed
              <br />
              12 AM to 4 PM
              <br />
              12 AM to 4 PM
              <br />
              12 AM to 4 PM
              <br />
              12 AM to 4 PM
              <br />
            </div>

            <div className="weekdays">
              Sunday
              <br />
              Monday
              <br />
              Tuesday
              <br />
              Wednesday
              <br />
              Thursday
              <br />
              Friday
              <br />
              Saturday
              <br />
            </div>
          </div>
        </div>
        <div className="location">
          <h1 className="restaurantInfoTitle">Location:</h1>
          <div className="address">
            123 Main Street, Hamilton, Ontario, L3T 6M5
          </div>
          <div className="map"></div>
        </div>
        <div className="contact">
          <h1 className="restaurantInfoTitle">Contact:</h1>
          {socialLinks.map((link, index) => (
            <SocialLink key={index} text={link.text} url={link.url} />
          ))}
        </div>
      </div>
      <div className="menuButton">
        <MainButton className="viewFullMenu">View Full Menu</MainButton>
      </div>
    </div>
  );
};

const SocialLink = ({ text, url }) => {
  return (
    <div className="socialLink">
      <div
        className="logo"
      >
      </div>
      <a target="_blank" href={url}className="link">
        {text}
      </a>
    </div>
  );
};

export default Restaurant;
