import { Input } from "../../components/Input";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styles";

export function PageWithSidebar() {
  return (
    <S.PageWithSidebar>
      <Sidebar>
        <div style={{ padding: "20px" }}>
          <Input />
        </div>
      </Sidebar>
      <div className="container-cards">
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
      </div>
    </S.PageWithSidebar>
  );
}
