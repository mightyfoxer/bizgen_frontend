import { FC, ReactNode } from "react";
import Header from "../Nav/Header";
import Footer from "../Home/Footer";
import Sidebar from "../Sidebar";

interface Props {
  signed?: boolean;
  children?: ReactNode;
}

const Layout: FC<Props> = ({ signed, children }) => {
  return !signed ? (
    <main className="bg-bg-light min-h-screen relative overflow-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  ) : (
    <main className="flex">
      <Sidebar />
      <div className="w-[calc(100%-340px)] bg-primary-600">
        {children}
      </div>
    </main>
  );
};

export default Layout;
