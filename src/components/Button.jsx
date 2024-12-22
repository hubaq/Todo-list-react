/* eslint-disable react/prop-types */
function Button({ children, type, onClick }) {
  return (
    <button
      className={`text-neutral-dark-darkGrayishBlue font-josefin dark:hover:text-neutral-light-veryLightGray hover:text-neutral-dark-veryDarkDesaturatedBlue transition-colors duration-200 ${type === "all" ? "text-primary-blue font-semibold" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
