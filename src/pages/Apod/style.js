import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100%;
    height: 800px;
  }

  .content {
    max-width: 90%;
    padding: 45px;
  }

  .content h2 {
    font-size: 40px;
  }

  .content p {
    margin-top: 30px;
  }

  .content p:nth-child(2) {
    font-weight: bold;
    font-size: 20px;
  }

  .content p:nth-child(3) {
    line-height: 25px;
  }
`;
