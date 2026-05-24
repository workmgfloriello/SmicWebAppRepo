import "./Menu.css";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function GeneralMenu({
  updateMenuState,
}: {
  updateMenuState: (isOpen: boolean) => void;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    updateMenuState(false);
  };

  const handleMenuClick = (section: string) => {
    setTimeout(() => {
      console.log(`Navigating to ${section} section`);
      updateMenuState(false); // Chiude il menu
      navigate(`/categoria?menu=${section.toLowerCase()}`); // Naviga alla sezione
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col animate-fadeIn"
      style={{ backgroundColor: "rgba(77, 124, 138, 0.98)" }}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={() => handleClick()}
          className="text-white hover:rotate-90 transition-transform duration-300"
        >
          <X size={36} />
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
        {[
          "CAFFETTERIA", // espresso, cappuccino, tè, cioccolata
          "APERITIVI", // spritz, prosecco, drink pre-cena
          "COCKTAILS", // cocktail classici e signature
          "BEVANDE E VINI", // selezione vini e birre artigianali
          "FOOD", // piatti, snack, tapas, dolci
          "GELATI", // gelato artigianale e sorbetti
          "PASTICCERIA", // dolci da forno e pasticceria fresca, torte su ordinazione
        ].map((item, index) => (
          <div
            key={item}
            className="text-white text-4xl hover:scale-110 transition-all duration-300 relative group cursor-pointer"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.15em",
              animationDelay: `${index * 0.1}s`,
            }}
            onClick={() => handleMenuClick(item.toLowerCase())}
          >
            {item}
            <span
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{ backgroundColor: "#D4AF37" }}
            ></span>
          </div>
        ))}
      </nav>
    </div>
  );
}
