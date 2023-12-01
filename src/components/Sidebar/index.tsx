import { PropsWithChildren, useState } from "react";
import * as S from "./styles";

export function Sidebar({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <S.Sidebar>
      <S.Content $isOpen={isOpen}>{children}</S.Content>
      <S.ArrowContainer>
        <S.ArrowIcon
          onClick={() => setIsOpen((prev) => !prev)}
          $isOpen={isOpen}
        />
      </S.ArrowContainer>
    </S.Sidebar>
  );
}
