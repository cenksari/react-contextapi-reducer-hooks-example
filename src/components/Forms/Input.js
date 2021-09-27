import { memo } from 'react';
import PropTypes from 'prop-types';

const Input = memo(({ name, type, value, placeholder, onChange, maxLength }) => (
  <input
    id={name}
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    maxLength={maxLength}
    onChange={onChange}
    autoComplete='off'
  />
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default Input;
