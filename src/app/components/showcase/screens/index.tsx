import Image from "next/image";
import type { AppEntry, MockComponent } from "@/lib/apps";

// The in-phone screen for each app. Rendered identically in PhoneStage and MobileAppList.



function HoopsMock() {
  return (
    <div className="mock scr-ht">
      <div className="mtime">9:41</div>
      <div className="mh">Daily Challenge</div>
      <div className="ball" />
      <div className="mcard">
        <div className="mcard-title">
          Who holds the record for most points in a single game?
        </div>
        <span className="chip">Wilt Chamberlain</span>
        <span className="chip">Kobe Bryant</span>
        <span className="chip">Michael Jordan</span>
      </div>
      <div className="mfoot">Multiple choice · ad-free</div>
    </div>
  );
}



const MOCKS: Record<MockComponent, () => React.JSX.Element> = {
  HoopsMock,
};

export function AppScreen({ app, eager = false }: { app: AppEntry; eager?: boolean }) {
  if (app.screen.kind === "image") {
    return (
      <Image
        src={app.screen.src}
        alt={app.screen.alt}
        fill
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 900px) 248px, 352px"
        className="object-cover"
      />
    );
  }
  const Mock = MOCKS[app.screen.component];
  return <Mock />;
}
