import { Heart } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.google.com/whichbus-contribute";

export function ContributeLink() {
  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-secondary text-secondary-foreground rounded-xl font-medium text-sm hover:bg-secondary/80 transition-colors"
    >
      <Heart className="h-4 w-4 text-primary" />
      Know this route? Help others.
    </a>
  );
}
