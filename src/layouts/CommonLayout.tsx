import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <main className="relative">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default CommonLayout;
