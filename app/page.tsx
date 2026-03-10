export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-sm tracking-[0.25em] uppercase text-slate-400">SaaS Starter</span>
          <nav className="flex items-center gap-4 text-xs text-slate-300">
            <span className="hidden sm:inline">Docs</span>
            <span className="hidden sm:inline">API</span>
            <button className="rounded-full border border-slate-700 px-3 py-1 text-xs hover:bg-slate-800">Sign in</button>
          </nav>
        </div>
      </header>

      <section className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">Starter</p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">Ship a small SaaS in a weekend.</h1>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-md">
              App Router, a basic API and a simple pricing layout. This repo is meant to be a
              sane starting point – not a bloated boilerplate.
            </p>
            <ul className="text-sm text-slate-200 space-y-1 mb-6">
              <li>✓ Next.js 14 App Router</li>
              <li>✓ Health check API</li>
              <li>✓ Simple pricing section</li>
            </ul>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <button className="rounded-full bg-slate-50 text-slate-950 px-4 py-2 font-medium hover:bg-slate-200">
                View code
              </button>
              <span className="text-slate-400">or run `npm run dev` locally</span>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">Hobby</p>
                <p className="text-2xl font-semibold mb-1">$0</p>
                <p className="text-xs text-slate-400 mb-3">Perfect for prototypes and interviews.</p>
                <ul className="text-xs text-slate-200 space-y-1 mb-4">
                  <li>• 1 project</li>
                  <li>• Local only</li>
                  <li>• Health check API</li>
                </ul>
                <button className="w-full rounded-full border border-slate-700 px-3 py-2 text-xs hover:bg-slate-800">
                  Use as template
                </button>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-1">Pro</p>
                <p className="text-2xl font-semibold mb-1">$19</p>
                <p className="text-xs text-slate-400 mb-3">When you turn the starter into a product.</p>
                <ul className="text-xs text-slate-200 space-y-1 mb-4">
                  <li>• Add auth & billing</li>
                  <li>• Add dashboard routes</li>
                  <li>• Deploy to Vercel</li>
                </ul>
                <button className="w-full rounded-full bg-emerald-400 text-slate-950 px-3 py-2 text-xs font-medium hover:bg-emerald-300">
                  Start with this layout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
