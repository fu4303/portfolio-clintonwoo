import * as React from "react";
import { Hero } from "../components/hero";

import { MainLayout } from "../layouts/main-layout";

export function HomePage(): JSX.Element {
  return (
    <MainLayout className="">
      <Hero />
    </MainLayout>
  );
}
