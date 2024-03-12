import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
const initialValues = {
  name: "",
  number: "",
};

// Валідація за допомогою Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in the format xxx-xx-xx")
    .required("Phone number is required"),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    // Генеруємо унікальний ідентифікатор для контакту
    const newContact = { ...values, id: nanoid() };

    // Логіка обробки форми
    onSubmit(newContact);

    // Очисщеня форми після успішного відправлення
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name:
        </label>

        <div className={css.containerField}>
          <Field
            className={css.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage
            className={css.errorSpan}
            name="name"
            component="span"
          />
        </div>

        <label className={css.label} htmlFor="number">
          Phone Number:
        </label>

        <div className={css.containerField}>
          <Field
            className={css.input}
            type="text"
            id="number"
            name="number"
            placeholder="xxx-xx-xx"
          />
          <ErrorMessage
            className={css.errorSpan}
            name="number"
            component="span"
          />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
