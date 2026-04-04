import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <CustomCursor />
      {children}
      <Navbar />
    </>
  );
}
