export const MainBgElements = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-60 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse delay-2000" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-32 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700" />
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-1000" />
    </div>
  );
};
