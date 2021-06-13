import React from "react"
import ContactItem from "../ContactItem"
import style from "./ContactList.module.css"

const ContactList = ({ contacts, removeContact }) => (
    <ul className={style.contact_list}>
        {contacts.map(({ id, name, number }) => (
            <ContactItem id={id} key={id} name={name} number={number} removeContact={removeContact} />
        ))}
    </ul>
)

export default ContactList
