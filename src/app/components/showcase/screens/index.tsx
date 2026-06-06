import Image from "next/image";
import type { AppEntry, MockComponent } from "@/lib/apps";

// The in-phone screen for each app. Rendered identically in PhoneStage and MobileAppList.

function GuidingLightMock() {
  return (
    <div className="mock scr-gl">
      <div className="mtime">9:41</div>
      <div className="mh">This evening</div>
      <div className="mcard">
        <div className="quote">
          &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
        </div>
        <div className="mref">Psalm 119:105</div>
      </div>
      <div className="mcard mprompt">
        <div className="plabel">Reflect</div>
        <div className="ptext">Where did you notice light today?</div>
        <div className="pline" />
        <div className="pline short" />
      </div>
    </div>
  );
}

function BrighterStartMock() {
  return (
    <div className="mock scr-bs">
      <div className="mtime">9:41</div>
      <div className="mh">Good morning.</div>
      <div className="sun" />
      <div className="mcard">
        <div className="mcard-title">Morning routine</div>
        <div className="row">
          <span className="ck on">✓</span>
          <span>Make the bed</span>
        </div>
        <div className="row">
          <span className="ck on">✓</span>
          <span>Five quiet minutes</span>
        </div>
        <div className="row">
          <span className="ck">&nbsp;</span>
          <span>Plan the first task</span>
        </div>
      </div>
    </div>
  );
}

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

function DailyWisdomMock() {
  return (
    <div className="mock scr-dw">
      <div className="mtime">9:41</div>
      <div className="mh">Today&rsquo;s wisdom</div>
      <div className="mcard">
        <div className="quote">&ldquo;A gentle answer turns away wrath.&rdquo;</div>
        <div className="mref">Proverbs 15:1</div>
      </div>
      <div className="dots">
        <i className="on" />
        <i className="on" />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

const MOCKS: Record<MockComponent, () => React.JSX.Element> = {
  GuidingLightMock,
  BrighterStartMock,
  HoopsMock,
  DailyWisdomMock,
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
