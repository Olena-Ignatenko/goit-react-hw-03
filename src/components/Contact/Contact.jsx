import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";


const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.itemContact} key={id}>
      <div className={css.containerContact}>
        <div className={css.wraperContact}>
          <h2 className={css.nameContact}>
            <BsPersonFill className={css.iconInput} size="18" />
            {`${name}`}
          </h2>

          <p className={css.numberContact}>
            <BsTelephoneFill className={css.iconInput} size="18" />
            {`${number}`}{" "}
          </p>
        </div>
        <button className= {css.btnDelete} onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
