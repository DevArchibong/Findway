import { Link } from "react-router-dom";

export  function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-green">
      <div className="container mx-auto px-4 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand & Mission */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              FindWay
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Street smart route directions for commuters.
              Built to help everyday commuters navigate unfamiliar cities
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Explore
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition">
                Home
              </Link>
              <Link to="/routes" className="hover:text-foreground transition">
                Routes
              </Link>
              <Link to="/contribute" className="hover:text-foreground transition">
                Contribute a route
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Contact
            </h4>

            <a
              href="https://wa.me/2348153890778?text=Hi%20FindWay%2C%20I%20have%20feedback%20about%20a%20route"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              WhatsApp Support
            </a>

            <p className="text-xs text-muted-foreground">
              Fast responses. Real humans.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {year} FindWay</span>
          <span>Built for commuters</span>
        </div>

      </div>
    </footer>
  );
}
