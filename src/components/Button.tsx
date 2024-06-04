interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      {text}
    </button>
  );
}

export default Button;
