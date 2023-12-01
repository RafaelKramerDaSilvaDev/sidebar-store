import styled from "styled-components";

export const PageWithSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f0f1f4;

  .card {
    width: 240px;
    height: 240px;
    background-color: blue;
  }

  .container-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
