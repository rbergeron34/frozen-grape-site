import { LEGAL_ENTITY, SUPPORT_EMAIL } from "@/lib/studio";

// Shared building blocks for legal pages (studio-wide and generated per-app).

export const legalH2 = "text-xl font-bold text-[var(--ink)] pt-4 scroll-mt-24";
export const legalUl = "list-disc pl-5 space-y-2";
export const legalExt = "text-[var(--ink)] font-medium hover:underline";

export function SupportEmail() {
  return (
    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--ink)] font-medium hover:underline">
      {SUPPORT_EMAIL}
    </a>
  );
}

export function LegalHeader({
  title,
  effectiveDate,
  appName,
}: {
  title: string;
  effectiveDate: string;
  appName?: string;
}) {
  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <div className="mt-4 text-sm text-[var(--muted)] space-y-1">
        <p>
          <strong className="text-[var(--ink)]">Effective:</strong> {effectiveDate}
        </p>
        {appName && (
          <p>
            <strong className="text-[var(--ink)]">App:</strong> {appName}
          </p>
        )}
        <p>
          <strong className="text-[var(--ink)]">Developer:</strong> {LEGAL_ENTITY} (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; &ldquo;our&rdquo;)
        </p>
        <p>
          <strong className="text-[var(--ink)]">Contact:</strong> <SupportEmail />
        </p>
      </div>
    </>
  );
}
