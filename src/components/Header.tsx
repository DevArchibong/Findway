import { ChevronLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center h-14 gap-3">
        {!isHome && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
        )}

        <Link to="/" className="flex items-center">
          {/* Logo slot */}
          <div className="flex flex-col leading-none">
            <img
              src="/public/findWay-logo.jpeg"   
              alt="FindWay logo"
              className="h-12 w-auto  object-fill"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Text fallback (always visible or conditional if you want)
            <span className="font-display font-bold text-lg text-foreground">
              FindWay
            </span>

            <span className="text-[10px] text-muted-foreground tracking-wide">
              Follow who know road
            </span> */}
          </div>
        </Link>
      </div>
    </header>
  );
}
