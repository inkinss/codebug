const InputSearch = () => {
  return (
    <label className="input bg-transparent border-2 border-gray-300 rounded-none outline-none">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        className="focus:outline-none focus:border-none focus:ring-0 placeholder:text-gray-900"
        placeholder="Buscar...."
      />
      <kbd className="kbd kbd-sm bg-gray-700">⌘</kbd>
      <kbd className="kbd kbd-sm bg-gray-700">K</kbd>
    </label>
  );
};

export default InputSearch;
