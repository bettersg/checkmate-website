import { Footer, Navbar } from "./components";
import { Routes, Route, Outlet } from "react-router-dom";

import Index from "./routes/index"
import NoMatch from "./routes/404"
import PrivacyPolicy from "./routes/privacy";
import FactChecks from "./routes/factchecks";
import About from "./routes/about"
import Login from "./routes/login"
import Dashboard from "./routes/dashboard"
import Reset from "./routes/reset"
import Contact from "./routes/contact"
import Messages from "./routes/messages"

const App = () => (
  <div className="bg-checkBG w-full">

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="fact-checks" element={<FactChecks />} />
        <Route path="message-database" element={<Messages />} />
        <Route path="contact" element={<Contact />} />
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
      <header className="lg:sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center bg-checkBG h-28">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </header>

      <Outlet />

      <div className="flex flex-col justify-center items-center bg-checkBGFooter w-full">
        <Footer />
      </div>

    </div>
  );
}

export default App;
