const ContactsItem = ({id, name, number, onDeleteContact }) => (
     <li>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick = {()=> onDeleteContact(id)}>Delete</button>
    </li>
);

export default ContactsItem;