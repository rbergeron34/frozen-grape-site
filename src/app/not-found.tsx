import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-7xl font-extrabold tracking-tight text-[var(--ink)]">404</div>
      <p className="mt-4 text-[var(--muted)] text-lg max-w-sm">
        We couldn&rsquo;t find that page. It may have moved, or never existed.
      </p>
      <div className="mt-8 flex gap-3 flex-wrap justify-center">
        <Link href="/" className="btn btn-dark">
          Back to home
        </Link>
        <Link href="/#apps" className="btn btn-ghost">
          See the apps
        </Link>
      </div>
    </div>
  );
}
