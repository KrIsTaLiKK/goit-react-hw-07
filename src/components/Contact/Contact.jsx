import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useMemo } from 'react';
import { getRandomHexColor } from '../../helpers';
import css from './Contact.module.css';

const Contact = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const iconColor = useMemo(() => getRandomHexColor(), []);

  return (
    <div className={css.contactInfoListWrap}>
      <ul className={css.contactInfoList}>
        <li>
          <FaUser className={css.icon} style={{ color: `${iconColor}` }} />
          <span className={css.name}>{name}</span>
        </li>
        <li>
          <FaPhone className={css.icon} />
          <span className={css.name}>{phone}</span>
        </li>
      </ul>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
