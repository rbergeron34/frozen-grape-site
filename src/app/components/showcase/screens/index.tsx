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
      <div className="mtime">6:30</div>
      <div className="mh">Good morning.</div>
      <div className="sun" />
      <div className="mcard">
        <div className="mcard-title">You&rsquo;re up — keep going</div>
        <div className="row">
          <span className="ck on">✓</span>
          <span>Alarm cleared · 20 steps</span>
        </div>
        <div className="row">
          <span className="ck on">✓</span>
          <span>Open the blinds</span>
        </div>
        <div className="row">
          <span className="ck">&nbsp;</span>
          <span>Glass of water · 1:00</span>
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

function LockInMock() {
  return (
    <div className="mock scr-li">
      <div className="mtime">7:04</div>
      <div className="mh">Easy run · Zone 2</div>
      <div className="bpm">
        142<small>bpm</small>
      </div>
      <div className="band">
        <span className="zone" />
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="0,30 14,26 26,20 40,17 54,19 68,16 82,18 100,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="lock">✓ Locked in</div>
      <div className="mfoot">24 min in zone</div>
    </div>
  );
}

function PassPhotoMock() {
  return (
    <div className="mock scr-pp">
      <div className="mtime">9:41</div>
      <div className="mh">Passport photo</div>
      <div className="frame">
        <div className="oval">
          <span className="head" />
          <span className="shoulders" />
        </div>
      </div>
      <div className="mcard">
        <div className="row">
          <span className="ck on">✓</span>
          <span>Head size 52%</span>
        </div>
        <div className="row">
          <span className="ck on">✓</span>
          <span>Background &amp; lighting</span>
        </div>
      </div>
    </div>
  );
}

const MOCKS: Record<MockComponent, () => React.JSX.Element> = {
  GuidingLightMock,
  BrighterStartMock,
  HoopsMock,
  LockInMock,
  PassPhotoMock,
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
