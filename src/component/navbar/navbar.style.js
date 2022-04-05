import styled from "styled-components";

export const NavContainer = styled.nav`
  a {
    position: relative;
    left: 90vw;
    top: 3vh;
    border: 0.5px solid #fff;
    text-decoration: none;
    color: #fff;
    padding: 8px;
    border-radius: 5px;
  }

  @media (max-width: 425px) {
    a {
      left: 83vw;
      top: 3vh;
    }
  }
`;
