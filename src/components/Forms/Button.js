import { memo } from 'react';
import PropTypes from 'prop-types';

const Button = memo(({ type, title, onClick }) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    onClick={onClick}
    className='button white normal'
  >
    {title}
  </button>
));

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
