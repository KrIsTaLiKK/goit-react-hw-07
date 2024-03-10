import Modal from 'react-modal';
import css from './ContactModal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContact } from '../../redux/operations';

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, setIsOpen, id, name, phone }) => {
  const [formValues, setFormValues] = useState({ name, phone });

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setFormValues(prevValues => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      changeContact({ name: formValues.name, phone: formValues.phone, id })
    );
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Change Contact Modal"
      className={`${css.content}`}
      overlayClassName={`${css.overlay}`}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={formValues.phone}
          onChange={handleInputChange}
        />
        <button>Change</button>
      </form>
    </Modal>
  );
};

export default ContactModal;
