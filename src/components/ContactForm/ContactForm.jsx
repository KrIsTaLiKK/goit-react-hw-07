import { Field, Formik, Form } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';


const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short name!')
    .max(50, 'Too long name!')
    .required('Required field!'),
  number: Yup.string()
    .min(3, 'Incorrect number!')
    .max(50, 'Incorrect number!')
    .required('Required field!'),
});

const initialValues = {
  name: '',
  number: '',
};

 const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const userId = useId();
  const numderId = useId();

  const handleSubmit = ({ name, number }, actions) => {
    const repeatedContact = contacts.some(
      ({ name: userName }) => userName.toLowerCase() === name.toLowerCase()
    );

    if (repeatedContact) {
      actions.resetForm();
      return alert(`Contact is already in contacts`);
    }

    dispatch(addContact({ name, phone: number }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldWrap}>
          <label htmlFor={userId}>Name</label>
          <Field
            name="name"
            id={userId}
            className={css.formInput}
            placeholder="Enter name..."
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numderId}>Number</label>
          <Field
            name="number"
            id={numderId}
            className={css.formInput}
            placeholder="Enter number..."
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;