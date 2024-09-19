interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 bg-white rounded-full p-2 shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl ${direction === "left" ? "left-4" : "right-4"} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
      disabled={disabled}
      aria-label={`Scroll ${direction === "left" ? "left" : "right"}`}
    >
      {direction === "left" ? (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
};

export default ScrollButton;
