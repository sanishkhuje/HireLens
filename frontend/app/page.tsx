
const features = [
  {
    number: "01",
    title: "Evidence-based matching",
    description:
      "Compare candidate experience and skills against job requirements with clear supporting evidence.",
  },
  {
    number: "02",
    title: "Identify skill gaps",
    description:
      "Highlight missing or unverified skills so recruiters know what deserves a closer look.",
  },
  {
    number: "03",
    title: "Human-led decisions",
    description:
      "Give recruiters useful insights while keeping hiring decisions in human hands.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="text-2xl font-bold tracking-tight">
          Hire<span className="text-cyan-400">Lens</span>
        </a>

        <span className="hidden text-sm text-slate-400 sm:block">
          AI-assisted recruitment intelligence
        </span>

        <a
          href="#workspace"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium transition hover:border-cyan-400"
        >
          Get started
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Smarter screening. Clearer decisions.
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Find the right fit.
            <span className="block text-cyan-400">
              Understand why.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            HireLens helps recruiters compare resumes with job
            descriptions, uncover skill gaps, and review evidence
            behind candidate matches.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#workspace"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore screening workspace
            </a>
            <a
              href="#features"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900"
            >
              How it works
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Explainable insights. Human-led hiring.
          </p>
        </div>

        <div
          id="workspace"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-cyan-950/20 sm:p-8"
        >
          <div className="mb-7">
            <p className="text-sm font-medium text-cyan-400">
              SCREENING WORKSPACE
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Start a candidate review
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Prepare the job requirements and candidate resume
              for an evidence-based comparison.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="job-description"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Job description
              </label>
              <textarea
                id="job-description"
                name="jobDescription"
                rows={5}
                placeholder="Paste the job description, responsibilities, and required skills..."
                className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="resume"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Candidate resume
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.docx"
                className="block w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-400 file:mr-4 file:rounded-lg file:border-0 file:bg-slate-800 file:px-4 file:py-2 file:font-medium file:text-white hover:file:bg-slate-700"
              />
              <p className="mt-2 text-xs text-slate-500">
                PDF or DOCX · Upload processing will be added next.
              </p>
            </div>

            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-xl bg-cyan-400/50 px-5 py-3 font-semibold text-slate-950/80"
            >
              Matching engine coming next
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              This workspace is a UI preview. No resume is uploaded
              or analyzed yet.
            </p>
          </form>
        </div>
      </section>

      <section
        id="features"
        className="border-t border-slate-800 bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Built for better hiring workflows
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            More than a score. Insights recruiters can understand.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-400/50"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  {feature.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        HireLens · AI-assisted insights, human-led decisions.
      </footer>
    </main>
  );
}
