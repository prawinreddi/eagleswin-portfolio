export default function StyleHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      {/* Our E-commerce Navbar will go here */}
      <main className="w-full h-full flex flex-col">{children}</main>
      {/* Our E-commerce Footer will go here */}
    </div>
  );
}
