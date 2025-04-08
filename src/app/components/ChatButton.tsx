import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatButton() {
  return (
    <Button
      className="fixed bottom-6 left-6 rounded-full w-12 h-12 bg-pink-500 hover:bg-pink-600 shadow-lg"
      size="icon"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
}
