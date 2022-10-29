import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2px;

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    max-width: 80%;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
    background-size: cover;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 1rem 0;
  }

  h2,
  p {
    margin: 1rem 0;
  }
`;
