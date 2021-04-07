import * as React from "react";

import { Header } from "../components/header";
import { SocialFooter } from "../components/social-footer";

export interface IMainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout(props: IMainLayoutProps): JSX.Element {
  const { children, className } = props;

  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <SocialFooter />
    </>
  );
}
