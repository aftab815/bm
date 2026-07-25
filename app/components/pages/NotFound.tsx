import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { useSEO } from "../../hooks/useSEO";

export function NotFound() {
  useSEO({
    title: "Page Not Found | BM Solicitor (Pvt) Limited",
    description: "The page you are looking for does not exist. Visit BM Solicitor for expert legal services in Lahore, Pakistan.",
    path: "/404",
  });
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-muted">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-xl text-secondary mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-destructive transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-secondary/30 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
