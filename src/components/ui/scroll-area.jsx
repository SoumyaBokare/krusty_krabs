import PropTypes from 'prop-types';

export function ScrollArea({ children, className, ...props }) {
  return (
    <div className={`overflow-auto ${className}`} {...props}>
      {children}
    </div>
  );
}

ScrollArea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

