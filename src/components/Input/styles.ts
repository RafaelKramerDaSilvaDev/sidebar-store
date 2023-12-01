import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  height: 40px;
  padding: 0 16px;

  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
    0px 1px 1px 0px rgba(0, 0, 0, 0.1);

  input {
    color: #969aaf;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
  }

  input::placeholder {
    color: #969aaf;
  }
`;
