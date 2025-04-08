
import { MessageSquare } from "lucide-react";

const FloatingChat = () => {
  return (
    <button 
      className="fixed bottom-6 left-6 bg-neon-pink text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors z-50"
      aria-label="Chat with us"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default FloatingChat;
