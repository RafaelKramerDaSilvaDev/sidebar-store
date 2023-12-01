import { createGlobalStyle, css } from "styled-components";
import { reset } from "./reset";

const style = css``;

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${style}
`;
