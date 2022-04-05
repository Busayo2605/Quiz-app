import styled from "styled-components";

export const CategoryContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;

  .category--details {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;

    a {
      width: 50%;
      border-radius: 99px;
      text-decoration: none;
      background: #fff;
      padding: 15px;
      margin: 20px;
      font-weight: 500;
      font-family: cursive;
      font-size: 1.3rem;

      :hover {
        opacity: 0.7;
        transition: all ease-in 300ms;
      }
    }
  }

  @media (max-width:425px) {
    .category--details {
      a{
        font-size: .8rem;
        padding: 8px;
      }

    }
  }
`;
