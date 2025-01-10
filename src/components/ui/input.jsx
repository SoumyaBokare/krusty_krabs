import PropTypes from 'prop-types';

export function Input({ className, ...props }) {
  return (
    <input
      className={`px-3 py-2 border rounded ${className}`}
      {...props}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
};

