export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-primary">
      <div className="text-center">
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-text-primary">
          404
        </h1>
        <p className="mt-4 font-mono text-sm tracking-widest text-accent uppercase">
          Page Not Found
        </p>
      </div>
    </main>
  );
}
