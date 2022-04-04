import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;

  .info {
    border: 2px solid;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    min-width: 65%;
    min-height: 40%;
    border-radius: 24px;
  }

  .details {
    text-align: center;
    h2 {
      text-transform: uppercase;
      letter-spacing: 3px;
      font-family: cursive;
      font-size: 2.3rem;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.5rem;
    }
  }
  a {
    color: #fff;
    background: transparent;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 10px;
    border-radius: 99px;
    text-align: center;
    margin-top: 15px;
    transition: all 2s linear;

    :hover {
      background: blueviolet;
    }
  }
`;