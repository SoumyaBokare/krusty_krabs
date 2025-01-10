import PropTypes from 'prop-types';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

