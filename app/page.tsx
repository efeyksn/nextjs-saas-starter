export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-2">SaaS Starter</h1>
      <p className="text-gray-600 mb-6">A minimal Next.js app skeleton for experiments.</p>
      <ul className="space-y-1 text-sm">
        <li>✓ App Router</li>
        <li>✓ Simple pricing copy</li>
        <li>✓ Health check API</li>
      </ul>
    </main>
  );
}
