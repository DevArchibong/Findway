import { Heart } from "lucide-react";

const WHATSAPP_NUMBER = "2348153890778"; // replace with your WhatsApp number
const WHATSAPP_MESSAGE =
  "Hi FindWay, I’d like to contribute a bus route or improve an existing one.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function ContributeLink() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-secondary text-secondary-foreground rounded-xl font-medium text-sm hover:bg-secondary/80 transition-colors"
    >
      <Heart className="h-4 w-4 text-primary" />
      Do you know your city? Help others.
    </a>
  );
}
