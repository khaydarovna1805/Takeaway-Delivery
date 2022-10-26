import React from "react";
import {
  MenuItem,
  Navbar,
  OrderIcon,
  OrderWrap,
  TDLogo,
  Top,
  Wrapper1,
} from "./style";
import Img1 from "../imgs/img1.png";

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
    </div>
  );
};

export default Home;
