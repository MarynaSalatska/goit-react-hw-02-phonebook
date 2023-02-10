import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

export function ContactListItem({ name, number, onBtnDelete, btnId }) {
  return (
    <li>
      {name}: <span>{number} </span>
      <button id={btnId} onClick={onBtnDelete} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onBtnDelete: PropTypes.func.isRequired,
};
