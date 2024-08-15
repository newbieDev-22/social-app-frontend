const bgMap = {
  blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
  green: "bg-green-500 hover:bg-green-600 active:bg-green-700",
  red: "bg-rose-500 hover:bg-rose-600 active:bg-rose-700",
};

const colorMap = {
  white: " text-white",
  black: "text-black",
};

const widthMap = {
  full: "w-full",
  40: "w-40",
};

export default function Button({
  children,
  bg = "blue",
  color = "white",
  width,
  onClick,
}) {
  return (
    <button
      className={`px-3 py-1.5 ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} focus:outline-none rounded-md font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
