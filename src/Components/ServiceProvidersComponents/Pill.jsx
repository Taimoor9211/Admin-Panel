const Pill = ({ children, tone }) => {
  const map = {
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-600",
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    gray: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  );
};

export default Pill;