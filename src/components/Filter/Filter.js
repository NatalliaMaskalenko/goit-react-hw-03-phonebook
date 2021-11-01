import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={s.filter__label}>
        Find contacts by name
        <input className={s.filter__input} type="text" value={value} onChange={onChange} placeholder="Jacob Mercer" />
    </label>
);

export default Filter;