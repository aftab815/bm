import { Outlet } from "react-router";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsTicker } from "./NewsTicker";
import { ChatbotWidget } from "./ChatbotWidget";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NewsTicker />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
