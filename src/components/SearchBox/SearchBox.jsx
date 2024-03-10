import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.containerSearchBox}>
      <label className={css.label}>Find contacts by name</label>
      <input className={css.input}
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
