import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContact, deleteContact } from '../../redux/operations';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import ContactModal from '../ContactModal/ContactModal';
import { getRandomHexColor } from '../../helpers.js';
import css from './Contact.module.css';

const Contact = ({ contact: { name, phone, id } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const iconColor = useMemo(() => getRandomHexColor(), []);

  const updateContact = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div>
      <div>
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
          <div className={css.btnWrap}>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btn}
            >
              Delete
            </button>
            <button type="button" className={css.btn} onClick={updateContact}>
              Change
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div>
          <ContactModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            id={id}
            name={name}
            phone={phone}
          />
        </div>
      )}
    </div>
  );
};

export default Contact;
