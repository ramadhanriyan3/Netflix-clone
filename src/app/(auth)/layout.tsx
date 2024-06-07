import Navbar from "../../components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full bg-[url('/hero.png')] bg-fixed bg-center bg-cover bg-no-repeat">
      <div className="w-full h-sreen bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0)] via-60% to-[rgba(0,0,0,0.8)] to-100% ">
        <Navbar atHomepage={false} />
        <div className="flex justify-center items-center max-w-screen-lg mx-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
