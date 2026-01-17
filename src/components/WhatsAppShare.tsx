import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BusRoute } from "@/types/route";
import { shareOnWhatsApp } from "@/lib/routes";

interface WhatsAppShareProps {
  route: BusRoute;
}

export function WhatsAppShare({ route }: WhatsAppShareProps) {
  return (
    <Button
      onClick={() => shareOnWhatsApp(route)}
      className="w-full h-12 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl shadow-soft"
    >
      <Share2 className="h-5 w-5 mr-2" />
      Share on WhatsApp
    </Button>
  );
}
