const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li key={id}>
      <p>{`Name: ${name}`}</p>
      <p>{`Number: ${number}`}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
