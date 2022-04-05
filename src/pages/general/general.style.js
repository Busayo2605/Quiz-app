import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  /* width:100% ; */

  .quiz-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .quiz {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .question--container {
    border: 2px solid #fff;
    padding: 20px;
    border-radius: 99px;
    text-align: center;

    .question {
      text-transform: capitalize;
      font-family: cursive;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }

  .option--container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .option {
      width: 200px;
      padding: 10px;
      margin: 10px;
      background: none;
      border: 2px solid #fff;
      border-radius: 99px;
      color: #fff;
      transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      :hover {
        background: blueviolet;
      }
    }
  }

  .ctrl-container {
    display: flex;
    gap: 3rem;
    margin-top: 0.5rem;
  }
  .question-ctrl {
    color: #fff;
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    .question--container {
      padding: 18px;
      margin-bottom: 16px;
      .question {
        font-size: 16px;
      }
    }

    .quiz {
      width: 100%;
    }
    .option--container {
      display: flex;
      flex-direction: column;
    }
  }
`;
