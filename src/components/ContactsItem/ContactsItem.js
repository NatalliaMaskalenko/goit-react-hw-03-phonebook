import s from './ContactsItem.module.css'

const ContactsItem = ({ id, name, number, onDeleteContact }) => (
     <li className={s.item}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
        <button className={s.button} onClick = {()=> onDeleteContact(id)}>Delete</button>
    </li>
);

export default ContactsItem;