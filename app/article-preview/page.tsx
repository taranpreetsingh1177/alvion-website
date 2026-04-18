import { notFound } from "next/navigation";
import { Navbar } from "@/components/abstract/Navbar";
import { ArticleHero } from "@/components/abstract/ArticleHero";

// ── Dev-only guard ────────────────────────────────────────────────────────────
export default function ArticlePreviewPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Animated hero ──────────────────────────────────────────── */}
      <ArticleHero />

      {/* ================================================================
                ARTICLE BODY — styled prose without the typography plugin
                ================================================================ */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {/* Lead / intro paragraph */}
        <p className="text-xl leading-relaxed text-foreground font-medium mb-10 border-l-4 border-primary pl-6">
          Every procurement committee has been burned. Every CFO has a story
          about the consultant who over-promised and under-delivered, the vendor
          whose roadmap evaporated, the firm that looked exceptional in the
          pitch and invisible in the project. Trust, once broken at
          institutional scale, takes years to rebuild — which is precisely why
          the firms that are systematically building it are pulling away from
          the competition.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-4">
          The Trust Deficit in Modern B2B
        </h2>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          Between 2020 and 2025, the average B2B buying committee grew from five
          to eleven stakeholders. Decision cycles lengthened by 34%. And yet,
          most firms continue to optimise for the pitch — the moment of maximum
          impression — rather than for the arc of the relationship.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          The result is a structural mismatch. Buyers are increasingly
          risk-averse and consensus-driven. Sellers are still largely organised
          around individual relationships, quarterly quotas, and the belief that
          a sufficiently compelling proposal can overcome accumulated
          scepticism. It can&apos;t. Not anymore.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          What has changed is not the importance of relationships — those remain
          decisive — but the inputs that inform them. Committees now conduct
          60–70% of their due diligence before they speak to a vendor. They
          study published work, ask their networks, review case evidence, and
          form a prior. The firms that understand this are building their
          credibility infrastructure well before the RFP arrives.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-4">
          Four Pillars of Institutional Trust
        </h2>

        <p className="text-base leading-[1.8] text-foreground mb-6">
          Across engagements with firms in financial services, industrial
          distribution, and professional services, we&apos;ve identified four
          compounding behaviours that distinguish the most trusted operators:
        </p>

        {/* Callout card */}
        <div className="my-8 rounded-xl bg-accent border border-accent-foreground/10 p-6 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/60">
            Framework
          </p>
          <ul className="space-y-4">
            {[
              {
                heading: "Demonstrated expertise, not asserted",
                body: "Thought leadership that is specific, contrarian, and supported by data. Not 'we believe in collaboration' — but original analysis that changes how a buyer sees their problem.",
              },
              {
                heading: "Outcome accountability",
                body: "Commitments made in writing, tracked visibly, and reported honestly — including when targets are missed. Clients extend more latitude to firms that surface problems before being asked than to those who bury them.",
              },
              {
                heading: "Institutional continuity",
                body: "Relationships that survive individual departures. When the partner who sold the deal leaves, does the knowledge? The answer determines whether trust lives in a person or an institution.",
              },
              {
                heading: "Strategic restraint",
                body: "Saying no to scope that falls outside your genuine capability — even when the revenue is attractive. Nothing erodes institutional trust faster than a firm that over-reaches and underperforms.",
              },
            ].map(({ heading, body }) => (
              <li key={heading} className="flex gap-4">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                <span className="text-base leading-[1.75] text-foreground">
                  <strong className="font-semibold">{heading}.</strong> {body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-4">
          What This Looks Like in Practice
        </h2>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          Consider a mid-market infrastructure consultancy we worked with over
          an eighteen-month period. When we first engaged them, their net
          revenue retention was 91% — healthy by most benchmarks, but masking
          significant churn among their top-decile accounts. Exit interviews
          revealed a consistent pattern: clients felt well-served during
          engagements but poorly handled at transition points — handoffs between
          teams, project completions, and executive changes.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          The intervention was not a new service or a lower price point. It was
          a set of designed transition rituals: a 60-day close protocol with
          joint outcome reviews, a structured knowledge transfer to the client
          team, and a 90-day post-engagement check with no commercial agenda.
          These cost almost nothing to implement. Within two years, net revenue
          retention had risen to 108%, and four of their five largest client
          relationships had deepened into multi-year commitments.
        </p>

        {/* Pull quote / blockquote */}
        <blockquote className="my-10 border-l-4 border-primary pl-6 space-y-2">
          <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug italic">
            &ldquo;The firms clients trust most are not those who never make
            mistakes — they are those who treat the handling of mistakes as a
            competitive advantage.&rdquo;
          </p>
          <cite className="not-italic text-sm text-muted-foreground">
            — Managing Partner, Tier-1 European Strategy Firm
          </cite>
        </blockquote>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-4">
          The Compounding Effect
        </h2>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          Trust has economics that most firms underestimate. A client who trusts
          you deeply does not simply rebuy — they advocate, absorb price
          increases without pushback, forgive execution errors, and introduce
          you to peers. The lifetime value differential between a
          &lsquo;satisfied&rsquo; client and a &lsquo;deeply trusting&rsquo;
          client can be 3–5× over a seven-year horizon.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          More importantly, trust compounds at the portfolio level. A firm that
          is known for institutional trustworthiness — documented through
          published work, peer referrals, and a track record that survives
          individual turnover — pays significantly lower sales and marketing
          costs. Deal cycles shorten. Reference calls are warmer. The cost of
          uncertainty in a buying committee, which is very real and very large,
          is effectively subsidised by the firm&apos;s reputation.
        </p>

        {/* Inline callout / tip */}
        <div className="my-8 rounded-xl bg-accent border border-accent-foreground/10 px-6 py-5 flex gap-4">
          <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white text-[10px] font-bold leading-none">
              i
            </span>
          </div>
          <p className="text-sm leading-relaxed text-accent-foreground">
            <strong className="font-semibold">Key diagnostic.</strong> Ask your
            last five clients: "Would you introduce us to a peer without being
            asked?" If fewer than three say yes without hesitation, your trust
            architecture has a gap that pipeline optimisation will not fix.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-4">
          Building the Infrastructure
        </h2>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          Trust is not built in a campaign — it is built in a system. The firms
          we work with that do this best treat credibility as an operational
          discipline, not a marketing function. They assign ownership. They
          measure it. They review it in the same forums where they review
          revenue.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          The practical starting point is simpler than most leaders expect: a
          rigorous audit of the last twelve months of client communications,
          milestone reporting, and transition handling. Where were commitments
          vague? Where did follow-through fall short? Where did the client have
          to ask for something they should have been offered?
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          Those gaps are not failures of talent. They are failures of system.
          And systems, unlike talent, can be designed.
        </p>

        {/* Section 6 — closing */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-4">
          The Window Is Now
        </h2>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          We are in a period where AI is compressing the technical
          differentiation between firms at a pace that would have seemed
          implausible three years ago. Analytical capabilities that once
          required specialist teams are becoming table stakes. Proposal quality,
          communication polish, and even insight generation are increasingly
          commoditised.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-5">
          What AI cannot commoditise — at least not yet — is institutional
          trustworthiness. The pattern of decisions made over years. The
          reputation that arrives in a room before you do. The referral from a
          CFO who has seen you handle a difficult conversation with integrity.
        </p>

        <p className="text-base leading-[1.8] text-foreground mb-8">
          The firms investing in trust architecture now are building a moat that
          is, paradoxically, both very old-fashioned and very durable. In a
          market where everything else is accelerating, the advantage belongs to
          those who play the long game.
        </p>

        {/* Article footer / author card */}
        <div className="mt-14 pt-10 border-t border-border flex items-start gap-5">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
            AS
          </div>
          <div>
            <p className="font-semibold text-foreground">Arjun Sharma</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Managing Partner at Alvion. Arjun leads our strategy and growth
              practice, working with mid-market and enterprise firms across
              financial services, industrials, and professional services.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              18 April 2026 · Strategy &amp; Growth
            </p>
          </div>
        </div>
      </article>

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Subtle gradient overlay for depth on dark bg */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
                            radial-gradient(ellipse 80% 120% at 0% 50%,   hsl(220 65% 27% / 0.50) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 80%  at 100% 50%, hsl(220 65% 20% / 0.40) 0%, transparent 55%)
                        `,
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Work with Alvion
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-xl mx-auto leading-tight">
            Ready to build the kind of trust that compounds?
          </h2>
          <p className="text-white/65 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            We work with a small number of firms at a time. If this perspective
            resonates, we&apos;d like to hear about your context.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="cursor-pointer px-7 py-3 rounded-(--radius) bg-white text-secondary font-semibold text-sm hover:bg-surface transition-colors duration-150">
              Start a conversation
            </button>
            <button className="cursor-pointer px-7 py-3 rounded-(--radius) border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-150">
              More insights
            </button>
          </div>
        </div>
      </section>

      {/* ── Simple footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Alvion</span>
          <span>© 2026 Alvion. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
