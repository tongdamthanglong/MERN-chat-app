const Avatar = ({ username, userId, online }) => {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-teal-200",
  ];
  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div className={`relative w-8 h-8 ${color} rounded-full flex items-center`}>
      <div className="text-center w-full opacity-70">
        {username[0].toUpperCase()}
      </div>
      {online && (
        <div className="absolute w-3 h-3 bg-green-400 border border-white bottom-0 right-0 rounded-full"></div>
      )}
      {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 border border-white bottom-0 right-0 rounded-full"></div>
      )}
    </div>
  );
};

export default Avatar;
