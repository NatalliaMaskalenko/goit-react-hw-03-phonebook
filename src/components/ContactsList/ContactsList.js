import ContactsItem from '../ContactsItem';

const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({id, name, number} ) => (
             <ContactsItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact} />
        ))}
    </ul>
);


export default ContactsList;