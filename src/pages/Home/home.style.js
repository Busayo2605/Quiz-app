import styled from "styled-components";
export const HomeContainer = styled.div`
background:rgba(0,0,0, .9) ;
  height: 100vh;
  width:100vw ;

  .home-details{
    color:#fff ;
    position:relative ;
    top:50vh ;
    left:0 ;
    width:60vw ;
    height:50vh ;

    h2{
      margin-bottom:20px ;
      font-size:2rem ;
      padding:10px ;
      letter-spacing: 2px;
      font-family:cursive ;
      font-weight:500 ;
    }
  }

  a{
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    border: 2px solid #f4f4f4;
    margin-left:10px ;
    color: #f4f4f4;
    font-family: cursive;
    font-size: 1.1rem;
    letter-spacing:2px ;
    font-weight:lighter ;
    cursor: pointer;
    transition: all 2s linear;
    text-decoration: none;

    :hover {
      background:#222 ;
    }
  }

  small {
    color: red;
  }

  @media (max-width:425px) {
    .home-details{
      width:80vw ;
    }

    h2{
      font-size:1.5rem ;
    }

    a{
      font-size: .8rem;
      padding: 8px;
    }
  }
`;
