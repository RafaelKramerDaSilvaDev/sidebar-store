import { SlArrowLeft } from "react-icons/sl";
import styled from "styled-components";

export const Sidebar = styled.div`
  display: grid;
  grid-template-areas: "content arrow";
  grid-template-columns: auto 28px;

  width: fit-content;
  height: 100%;
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  grid-area: content;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  width: ${({ $isOpen }) => ($isOpen ? "280px" : 0)};
  transition: width 0.2s ease-in-out;

  overflow: hidden;
`;

export const ArrowContainer = styled.div`
  grid-area: arrow;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled(SlArrowLeft)<{ $isOpen: boolean }>`
  color: #3f4362;
  cursor: pointer;

  transition: transform 0.2s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
