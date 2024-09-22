import styled from 'styled-components';

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  pointer-events: ${({$isOpen}) => $isOpen ? 'all' : 'none'};
  opacity: ${({$isOpen}) => ($isOpen ? 1 : 0)};
  z-index: ${({$zIndex}) => $zIndex};
  font-family: "Ubuntu Mono", monospace;

  @media (min-width: 480px) {
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 40px 5px;
  margin: 5px;
  background-color: white;
  border-radius: 16px;
  transition: all 0.25s ease;
  text-align: justify;
  transform: ${({$isOpen}) => ($isOpen ? 'scale(1)' : 'scale(0.5)')};

  &:last-child {
    padding: 48px 24px 24px 24px;
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;

    @media (min-width: 768px) {
      max-width: 80vw;
      max-height: 80vh;
      padding: 48px;

      &::-webkit-scrollbar {
        width: 14px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #8c8c8c;
        border-right: 4px solid white;
        border-left: 4px solid white;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-track {
        margin: 24px;
        background-color: #dadada;
        border-right: 4px solid white;
        border-left: 4px solid white;
        border-radius: 6px;
      }
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
`;

export const H2 = styled.div`
  font-size: 30px;
  margin-bottom: 32px;
  font-weight: 500;
  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

export const ModalText = styled.div`
  font-size: 15px;
  @media (min-width: 1024px) {
    font-size: 25px;
  }
  line-height: 1.5;
`;

export const Image = styled.img`
  max-width: 80%;
  margin-top: 32px;
`;

export const YMap = styled.div`
  position: relative;
  overflow: hidden;

  & > iframe {
    position: relative;
    width: 60vw;
    height: 20vh;
    @media (min-width: 768px) {
      width: 960px;
      height: 400px;
    }

    @media (min-width: 2560px) {
      width: 1500px;
      height: 700px;
    }
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child {
    align-items: center;
    justify-content: center;
  }
`;
