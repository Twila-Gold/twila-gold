import { Outlet, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HomePage } from "@/routes/index";
import { ShopLayout } from "@/routes/shop";
import { ShopHub } from "@/routes/shop.index";
import { ContactPage } from "@/routes/contact";
import { GoldJewelsPage } from "@/routes/gold-jewels";
import { SilverJewelsPage } from "@/routes/silver-jewels";
import { DiamondJewelsPage } from "@/routes/diamond-jewels";
import { PlatinumJewelsPage } from "@/routes/platinum-jewels";
import { LadiesPage } from "@/routes/shop.ladies";
import { GentsPage } from "@/routes/shop.gents";
import { KidsPage } from "@/routes/shop.kids";
import { AboutPage } from "@/routes/about";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gold-jewels" element={<GoldJewelsPage />} />
          <Route path="/diamond-jewels" element={<DiamondJewelsPage />} />
          <Route path="/platinum-jewels" element={<PlatinumJewelsPage />} />
          <Route path="/silver-jewels" element={<SilverJewelsPage />} />

          <Route path="/shop" element={<ShopLayout />}>
            <Route index element={<ShopHub />} />
            <Route path="ladies" element={<LadiesPage />} />
            <Route path="gents" element={<GentsPage />} />
            <Route path="kids" element={<KidsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
