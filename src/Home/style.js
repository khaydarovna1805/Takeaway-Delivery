import styled from "styled-components";
import { ReactComponent as Logo } from "../imgs/Logo.svg";
import { ReactComponent as Busket } from "../imgs/Busket.svg";
import { ReactComponent as Trustpilot } from "../imgs/trustpilot-logo.svg";
import Bg from "../imgs/bg.png";

const Top = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35b8be;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

const Navbar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
`;

const TDLogo = styled(Logo)`
  width: 36px;
  height: 46px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
  color: #28224b;

  :hover {
    color: #35b8be;
  }
`;

const OrderIcon = styled(Busket)`
  width: 25px;
  height: 17px;
`;

const OrderWrap = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35b8be;
  border-radius: 4px;
  cursor: pointer;
`;

const Wrapper1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${Bg});
  background-size: cover;
  padding: 100px;
`;

Wrapper1.Text = styled.div`
  display: flex;
  flex-direction: column;
`;

Wrapper1.Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1.8px;
  color: #08090a;
  margin-bottom: 27px;
`;

Wrapper1.Paragraph = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.36px;
  color: #546285;
`;

Wrapper1.Button = styled.button`
  background: #35b8be;
  border-radius: 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  padding: 20px 35px;
  width: fit-content;
  border: none;
  margin-top: 53px;
`;

Wrapper1.Icon = styled(Trustpilot)`
  width: 110px;
  height: 27px;
  margin-top: 30px;
`;

Wrapper1.Numbers = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #08090a;
  margin-top: 10px;
`;

export { Top, Navbar, TDLogo, MenuItem, OrderIcon, OrderWrap, Wrapper1 };