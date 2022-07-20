import { Input, Wrapper } from './Filter.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <h2>Find contacts by name</h2>
      <Input type="text" name="filter" value={value} onChange={handleChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
