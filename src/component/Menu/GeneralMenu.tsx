import "./Menu.css";
import { X } from "lucide-react";


export function GeneralMenu({updateMenuState}: {updateMenuState: (isOpen: boolean) => void}) {

    const handleClick = () =>
    {
        updateMenuState(false);
    }
  return (
    <div className="fixed inset-0 z-50 flex flex-col animate-fadeIn" style={{ backgroundColor: 'rgba(77, 124, 138, 0.98)' }}>
          <div className="flex justify-end p-6">
            <button
              onClick={() => handleClick()}
              className="text-white hover:rotate-90 transition-transform duration-300"
            >
              <X size={36} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
            {['APERITIVI', 'COCKTAILS', 'FOOD', 'EVENTI', 'CONTATTI'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-4xl hover:scale-110 transition-all duration-300 relative group"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: '0.15em',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item}
                <div 
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: '#D4AF37' }}
                ></div>
              </a>
            ))}
          </nav>
        </div>
  );
}
