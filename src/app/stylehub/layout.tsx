import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function StyleHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="w-full flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
