import React from "react";
import {
  MenuItem,
  Navbar,
  OrderIcon,
  OrderWrap,
  Section,
  TDLogo,
  Top,
  Wrapper1,
  Wrapper2,
  Wrapper3,
} from "./style";
import Img1 from "../imgs/img1.png";
import Img2 from "../imgs/img2.png";
import Img3 from "../imgs/img3.png";
import Img4 from "../imgs/img4.png";
import Img5 from "../imgs/img5.png";

export const Home = () => {
  return (
    <div>
      <Top>We're open and available for takeaway & delivery. Order Now</Top>
      <Navbar>
        <TDLogo />
        <MenuItem>Home</MenuItem>
        <MenuItem>Order</MenuItem>
        <MenuItem>Company</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Contact</MenuItem>
        <OrderWrap>
          <OrderIcon />
        </OrderWrap>
      </Navbar>
      <Wrapper1>
        <Wrapper1.Text>
          <Wrapper1.Title>
            Beautiful food <br /> & takeaway, <span>delivered</span> <br /> to
            your door.
          </Wrapper1.Title>
          <Wrapper1.Paragraph>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500.
          </Wrapper1.Paragraph>
          <Wrapper1.Button>Place an Order</Wrapper1.Button>
          <Wrapper1.Icon />
          <Wrapper1.Numbers>
            <span>4.8 out of 5</span> based on 2000+ reviews
          </Wrapper1.Numbers>
        </Wrapper1.Text>
        <img src={Img1} alt="Image1" />
      </Wrapper1>
      <Wrapper2>
        <Wrapper2.Text>
          <Wrapper2.Title>
            The home of <br />
            fresh products
          </Wrapper2.Title>
          <Wrapper2.Paragraph>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500.
          </Wrapper2.Paragraph>
          <Wrapper1.Button>Learn about us</Wrapper1.Button>
        </Wrapper2.Text>
        <img src={Img2} alt="Image2" />
      </Wrapper2>
      <Wrapper3>
        <Wrapper2.Title>How it works.</Wrapper2.Title>
        <Section>
          <div className="center">
            <img src={Img3} alt="Image3" />
            <Section.Title>Adapt your menu items</Section.Title>
            <Section.Text>
              Easily adapt your menu using the <br /> webflow CMS and allow
              <br /> customers to browse your items.
            </Section.Text>
          </div>
          <div className="center">
            <img src={Img4} alt="Image4" />
            <Section.Title>Accept online orders & takeout</Section.Title>
            <Section.Text>
              Let your customers order and pay <br /> via the powerful ecommerce
              system, <br /> or simple let them call your store.
            </Section.Text>
          </div>
          <div className="center">
            <img src={Img5} alt="Image5" />
            <Section.Title>Manage delivery or takeout</Section.Title>
            <Section.Text>
              Manage your own logistics and <br /> take orders simply through
              the <br />
              ecommerce system.
            </Section.Text>
          </div>
        </Section>
      </Wrapper3>
    </div>
  );
};

// ssh-keygen -p -f ~/.ssh/id_ed25519

export default Home;
