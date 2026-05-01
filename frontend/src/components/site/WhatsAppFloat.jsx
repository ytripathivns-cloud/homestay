import { MessageCircle } from "lucide-react";

const PHONE = "919839148337";
const MESSAGE = encodeURIComponent(
  "Hi Yogendra, I'm interested in Varanasi Paradise Homestay."
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export const WhatsAppFloat = () => {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-testid="whatsapp-float-button"
      className="group fixed bottom-20 right-5 sm:bottom-24 sm:right-7 z-[60] flex items-center gap-3 pl-4 pr-5 h-14 bg-[#25D366] text-white shadow-xl shadow-black/20 hover:bg-[#1ebe57] hover:shadow-2xl transition-all duration-300 rounded-full"
    >
      <span className="relative flex items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inline-flex h-10 w-10 rounded-full bg-[#25D366] opacity-50 animate-ping"
        />
        <svg
          viewBox="0 0 32 32"
          className="relative w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.889 2.722.889.688 0 2.15-.74 2.478-1.39.13-.244.188-.516.188-.803 0-.545-.103-.588-.574-.817-.574-.272-1.132-.573-1.704-.845-.358-.163-.515-.172-.774-.172zM16.89 2.97C8.74 2.97 2.1 9.634 2.1 17.86c0 2.607.69 5.156 2.01 7.4L2 30l4.884-1.571a14.74 14.74 0 0 0 7.113 1.834c8.148 0 14.79-6.665 14.79-14.89 0-8.226-6.642-14.89-14.79-14.89l-.107.487zm0 2.78c6.64 0 12.06 5.452 12.06 12.11 0 6.659-5.42 12.112-12.06 12.112a11.9 11.9 0 0 1-6.143-1.706l-.43-.258-2.908.932.975-2.836-.28-.43A12.046 12.046 0 0 1 4.83 17.86c0-6.658 5.42-12.11 12.06-12.11z"/>
        </svg>
      </span>
      <span className="hidden sm:inline text-sm font-semibold tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFloat;
