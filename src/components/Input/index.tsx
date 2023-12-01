import { RiSearchLine } from "react-icons/ri";
import * as S from "./styles";

export function Input() {
  return (
    <S.Input>
      <RiSearchLine size={16} color="#969AAF" />
      <input type="text" placeholder="Pesquisar" />
    </S.Input>
  );
}
