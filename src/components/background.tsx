export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="animate-aurora absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="animate-aurora absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-accent-2/15 blur-[120px] [animation-delay:-6s]" />
      <div className="animate-aurora absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-accent-3/10 blur-[120px] [animation-delay:-12s]" />
    </div>
  );
}
