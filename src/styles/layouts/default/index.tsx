import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components/Header";
import * as S from "./styles";

export interface DefaultProps extends React.HTMLAttributes<Element> {
  children: ReactNode;
}

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
