"use client";

import { useState } from "react";

function HomeHeartIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const pillars = [
  {
    title: "Home care coverage",
    description:
      "Pays for companion care, personal care aides, and skilled nursing at home — the services Medicare does not cover.",
  },
  {
    title: "Fall prevention benefits",
    description:
      "Covers smart home safety installations, grab bars, ramp installation, and environmental modifications before a fall happens.",
  },
  {
    title: "Caregiver coordination",
    description:
      "Access to a worker-owned caregiver network. Coverage follows the care, not the setting.",
  },
  {
    title: "Chronic condition support",
    description:
      "Remote monitoring equipment, medication management, and care coordination for chronic conditions managed at home.",
  },
  {
    title: "Respite care",
    description:
      "Paid relief for family caregivers. Up to 30 days per year. Burnout is the number one reason people leave home care.",
  },
  {
    title: "Transition coverage",
    description:
      "Hospital-to-home transition support. Covers the 90 days after discharge when readmission risk is highest.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      await fetch("https://api.solvinghealth.com/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: "careho.me", source: "waitlist-form" }),
      });
    } catch {
      // fail silently — show confirmation regardless
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="w-full border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-navy">
              <HomeHeartIcon />
            </div>
            <span className="text-lg font-semibold tracking-tight text-navy">
              careho.me
            </span>
          </div>
          <span className="inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
            Launching 2027
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 mb-8">
            Coming 2027 — Subject to regulatory approval
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Insurance that pays
            <br />
            to keep you home.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl mx-auto mb-10">
            Age-in-place insurance. Coverage for home care, fall prevention, and
            the services Medicare does not pay for. Designed for the 90% of
            Americans who want to stay home — and the care system that makes it possible.
          </p>
          <a
            href="#waitlist"
            className="inline-block rounded-lg bg-teal px-8 py-4 text-white font-medium hover:bg-teal/90 transition-colors text-lg"
          >
            Join the waitlist
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="w-full bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-8 text-center">
            The coverage gap nobody talks about
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-warm-gray">
            <p>
              Medicare covers hospital care. Long-term care insurance covers nursing
              homes. Nothing covers the{" "}
              <span className="text-navy font-medium">middle ground</span> — the
              in-home care that actually keeps people out of facilities.
            </p>
            <p>
              The average American family spends{" "}
              <span className="text-navy font-medium">$67,900 per year</span> on
              assisted living. Most of that care could happen at home for a fraction
              of the cost — if there were insurance to pay for it.
            </p>
            <p className="text-navy font-medium text-xl">
              careho.me is being built to close that gap. It does not exist yet. We are
              building the care model first, then the insurance product around it.
            </p>
          </div>
        </div>
      </section>

      {/* What we are designing */}
      <section className="w-full bg-light-gray">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4 text-center">
            What we are designing
          </h2>
          <p className="text-warm-gray text-center mb-12 text-lg max-w-xl mx-auto">
            Benefits built around home care realities — not facility reimbursement models.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-navy/5"
              >
                <div className="flex items-start gap-3">
                  <div className="text-teal mt-0.5 shrink-0">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="w-full bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-12 text-center">
            How we get there
          </h2>
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="text-teal shrink-0 mt-1">
                <UsersIcon />
              </div>
              <div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  2025–2026: Prove the care model
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  co-op.care is operating in Boulder, CO. Worker-owned caregivers.
                  Physician-supervised care plans. Real families, real outcomes. This is
                  the data needed to underwrite an insurance product.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-teal shrink-0 mt-1">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  2026: Partner with a licensed insurance carrier
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  We are a care company, not an insurer. We will license our care
                  model and outcomes data to a carrier partner. careho.me will be
                  the product experience — the underwriting will be institutional and
                  fully licensed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-teal shrink-0 mt-1">
                <CalendarIcon />
              </div>
              <div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  2027: File for approval and launch
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  State-by-state regulatory approval, starting in Colorado. Waitlist
                  members get first access, locked pricing, and input on benefit design
                  before we file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="w-full bg-navy text-white">
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Join the waitlist
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            We are not selling anything yet. Waitlist members get first access when
            we launch, founding-member pricing, and input on benefit design.
          </p>
          {submitted ? (
            <div className="bg-white/10 rounded-xl px-8 py-10">
              <p className="text-teal text-xl font-semibold mb-2">You are on the list.</p>
              <p className="text-white/70">
                We will be in touch when careho.me launches in 2027. In the meantime,
                you can learn about co-op.care — the care company behind this product.
              </p>
              <a
                href="https://co-op.care"
                className="inline-block mt-6 rounded-lg border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition-colors"
              >
                Learn about co-op.care
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-teal transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-teal px-6 py-3 text-white font-medium hover:bg-teal/90 transition-colors disabled:opacity-60 cursor-pointer whitespace-nowrap"
              >
                {submitting ? "Joining..." : "Join waitlist"}
              </button>
            </form>
          )}
          <p className="text-white/40 text-xs mt-6">
            No spam. No sales calls. We will email you when we are ready to launch.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="w-full bg-light-gray">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-warm-gray text-xs leading-relaxed">
            <strong className="text-navy">Regulatory disclaimer:</strong> careho.me is a pre-launch
            insurance product concept under development. No insurance products are currently
            available for purchase or enrollment. All described benefits are subject to state
            regulatory approval prior to offering. Insurance products are regulated by state
            insurance departments and must be approved before sale. Joining this waitlist does
            not create a contract, coverage, or any insurance obligation. co-op.care Technologies
            LLC is not a licensed insurance company. Any future insurance product will be
            underwritten by a licensed insurance carrier. The 2027 launch timeline is an estimate
            and is contingent on successful regulatory filings and carrier partnerships.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-navy/10 bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-sm">
            A{" "}
            <a
              href="https://co-op.care"
              className="text-navy font-medium hover:text-teal transition-colors"
            >
              co-op.care
            </a>{" "}
            product — launching 2027
          </p>
          <div className="flex items-center gap-6 text-sm text-warm-gray">
            <a href="https://co-op.care" className="hover:text-navy transition-colors">
              co-op.care
            </a>
            <a href="https://healthyho.me" className="hover:text-navy transition-colors">
              healthyho.me
            </a>
          </div>
          <p className="text-warm-gray/60 text-xs">Built entirely by AI.</p>
        </div>
      </footer>
    </div>
  );
}
