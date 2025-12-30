"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  rating: number;
  ratingsCount: number;
  price: string;
  category: string;
  ageRating: string;
  size: string;
  developer: string;
  features: string[];
  appStoreUrl: string;
  privacyInfo: string;
  platforms: string[];
  inAppPurchases?: { name: string; price: string }[];
  whatsNew?: { version: string; date: string; notes: string };
}

interface AppModalProps {
  app: AppData | null;
  onClose: () => void;
}

export default function AppModal({ app, onClose }: AppModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (app) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [app]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!app) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {app.ratingsCount > 0 && (
          <span className="ml-1.5 text-sm text-foreground/50">
            ({app.ratingsCount})
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full sm:max-w-2xl max-h-[95vh] sm:max-h-[85vh] bg-background rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col"
      >
        {/* Drag Handle (mobile) */}
        <div className="sm:hidden flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-foreground/20 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex gap-5">
              {/* App Icon */}
              <div className="relative w-24 h-24 rounded-[22%] overflow-hidden shadow-xl flex-shrink-0 ring-1 ring-black/5">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* App Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold tracking-tight mb-1 pr-8">{app.name}</h2>
                <p className="text-primary font-medium mb-2">{app.tagline}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {renderStars(app.rating)}
                  <span className="text-sm px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/60">
                    {app.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-4 gap-2 text-center">
              <div className="p-3 rounded-xl bg-foreground/5">
                <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Price</div>
                <div className="font-semibold text-sm">{app.price}</div>
              </div>
              <div className="p-3 rounded-xl bg-foreground/5">
                <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Age</div>
                <div className="font-semibold text-sm">{app.ageRating}</div>
              </div>
              <div className="p-3 rounded-xl bg-foreground/5">
                <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Size</div>
                <div className="font-semibold text-sm">{app.size}</div>
              </div>
              <div className="p-3 rounded-xl bg-foreground/5">
                <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Rating</div>
                <div className="font-semibold text-sm">{app.rating.toFixed(1)}</div>
              </div>
            </div>

            {/* Download Button */}
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full btn-primary flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-foreground/10 mx-6" />

          {/* Description */}
          <div className="p-6">
            <h3 className="font-semibold mb-3">About this app</h3>
            <p className="text-foreground/70 leading-relaxed">{app.description}</p>
          </div>

          {/* What's New */}
          {app.whatsNew && (
            <>
              <div className="h-px bg-foreground/10 mx-6" />
              <div className="p-6">
                <h3 className="font-semibold mb-3">What&apos;s New</h3>
                <div className="text-sm text-foreground/50 mb-2">
                  Version {app.whatsNew.version} · {app.whatsNew.date}
                </div>
                <p className="text-foreground/70">{app.whatsNew.notes}</p>
              </div>
            </>
          )}

          {/* Features */}
          <div className="h-px bg-foreground/10 mx-6" />
          <div className="p-6">
            <h3 className="font-semibold mb-4">Features</h3>
            <div className="grid gap-3">
              {app.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In-App Purchases */}
          {app.inAppPurchases && app.inAppPurchases.length > 0 && (
            <>
              <div className="h-px bg-foreground/10 mx-6" />
              <div className="p-6">
                <h3 className="font-semibold mb-4">In-App Purchases</h3>
                <div className="space-y-2">
                  {app.inAppPurchases.map((purchase, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-foreground/5">
                      <span className="text-foreground/80">{purchase.name}</span>
                      <span className="font-medium text-primary">{purchase.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Privacy & Platforms */}
          <div className="h-px bg-foreground/10 mx-6" />
          <div className="p-6">
            <h3 className="font-semibold mb-4">Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/50">Developer</span>
                <span className="text-foreground/80">{app.developer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50">Compatibility</span>
                <span className="text-foreground/80 text-right">{app.platforms.join(", ")}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-foreground/50">Privacy</span>
                <span className="text-foreground/80 text-right max-w-[60%]">{app.privacyInfo}</span>
              </div>
            </div>
          </div>

          {/* Bottom padding for safe area */}
          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}
