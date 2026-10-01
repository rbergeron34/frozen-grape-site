import type { Metadata } from "next";
import Home from "../../page";
import { NavLab } from "./NavLab";

export const metadata: Metadata = {
  title: "Nav lab",
  robots: { index: false, follow: false },
};

// The lab renders its own nav variants over the real home page, so hide the site nav here.
const HIDE_SITE_NAV = 'body:has([data-nav-lab]) > nav[aria-label="Main navigation"] { display: none; }';

export default async function NavLabPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const pick = (key: string) => {
    const value = params[key];
    return typeof value === "string" ? value : undefined;
  };
  return (
    <>
      <style>{HIDE_SITE_NAV}</style>
      <NavLab initial={{ variant: pick("v"), indicator: pick("i"), page: pick("p"), tint: pick("t"), cursor: pick("c") }} />
      <Home />
    </>
  );
}
