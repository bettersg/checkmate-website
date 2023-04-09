import { Footer, Navbar } from "./components";
import { Routes, Route, Outlet } from "react-router-dom";

import Index from "./routes/index"
import NoMatch from "./routes/404"
import PrivacyPolicy from "./routes/privacy";
import FAQ from "./routes/FAQs";
import About from "./routes/about"
import Login from "./routes/login"
import Dashboard from "./routes/dashboard"
import Reset from "./routes/reset"

const App = () => (
  <div className="bg-primary w-full">    

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reset" element={<Reset />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

  </div>
);

function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
    <header className="sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center bg-primary border-b-4 bb-checkGray">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </header>

    <Outlet />

    <div className="flex flex-col justify-center items-center bg-checkPurple w-full">
        <Footer />
    </div>

    </div>
  );
}

export default App;
