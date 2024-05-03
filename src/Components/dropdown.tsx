import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  text: string;
  link: string;
}

interface DropdownProps {
  buttonText: string;
  items: DropdownItem[];
  buttonClassName?: string;
  dropdownClassName?: string;
  onItemClick: (text: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonText,
  items,
  buttonClassName,
  dropdownClassName,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (text: string) => {
    onItemClick(text);
    toggleDropdown(); // Close dropdown after an item is clicked
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className={`focus:outline-none text-white font-semibold text-lg rounded-md px-5 py-2.5 text-center inline-flex items-center ${buttonClassName}`}
        id="dropdownHoverButton"
      >
        {buttonText}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-full  divide-y divide-gray-100 rounded-lg shadow z-50 ${dropdownClassName}`}>
          <ul className="py-2 text-xl  font-semibold" aria-labelledby="dropdownHoverButton">
            {items.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.link}#features`}>
                <button
                  onClick={() => handleItemClick(item.text)} // Call handleItemClick with the text of the item
                  className="block px-4 py-2   hover:text-gray-400 focus:outline-none w-full text-left"
                  >
                  {item.text}
                </button>
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
