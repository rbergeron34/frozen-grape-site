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
          Which team did LeBron win his first championship with?
        </div>
        <span className="chip">Cavaliers</span>
        <span className="chip">Heat</span>
        <span className="chip">Lakers</span>
      </div>
      <div className="mfoot">Six categories · ad-free</div>
    </div>
  );
}



const MOCKS: Record<MockComponent, () => React.JSX.Element> = {
  HoopsMock,
};

export function AppScreen({ app }: { app: AppEntry }) {
  if (app.screen.kind === "image") {
    return (
      <Image
        src={app.screen.src}
        alt={app.screen.alt}
        fill
        sizes="(max-width: 900px) 248px, 352px"
        className="object-cover"
      />
    );
  }
  const Mock = MOCKS[app.screen.component];
  return <Mock />;
}
