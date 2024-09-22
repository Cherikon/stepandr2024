import styled from "styled-components";
import fon from './images/ArmyFon.jpg'

export const MainBlock = styled.div`
  font-family: "Ubuntu Mono", monospace;
  background-image: url(${fon});
  background-attachment: fixed;
  text-align: center;
  color: white;
`;

export const Header = styled.header`
  font-size: 40px;
  @media (min-width: 1024px) {
    font-size: 75px;
  }
  height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const List = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 150px;
  h1 {
    font-size: 35px;
    @media (min-width: 1024px) {
      font-size: 60px;
    }
    margin: 32px 0;
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  div {
    font-size: 20px;
    @media (min-width: 1024px) {
      font-size: 45px;
    }
    cursor: pointer;
    &:hover {
      background: linear-gradient(180deg, #f00000, #f00000 16.67%, #ff8000 16.67%, #ff8000 33.33%, #ffff00 33.33%, #ffff00 50%, #007940 50%, #007940 66.67%, #4040ff 66.67%, #4040ff 83.33%, #a000c0 83.33%, #a000c0) ;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  overflow: ${props => props.$isOverflow ? 'visible' : 'hidden'};
`;

export const ImagePlane = styled.img`
  @media (max-width: 1023px) {
    display: none;
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 175vh;
`;

export const LastDiv = styled.div`
  @media (min-width: 1024px) {
    margin-top: 1294px;
  }
`;

export const Arrow = styled.img`
  @media (max-width: 1023px) {
    display: none;
  }
  position: absolute;
  bottom: 1380px;
  height: 40px;
  animation: animate 1200ms infinite forwards;

  @keyframes animate {
    0%, 100% {
      bottom: 1380px;
    }
    50% {
      bottom: 1410px;
    }
`;