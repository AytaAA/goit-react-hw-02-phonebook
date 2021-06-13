import React from "react"
import style from "./ContactItem.module.css"

const ContactItem = ({ id, name, number, removeContact }) => (
    <li key={id} className={style.list_item}>
        <span className={style.new_item}>
            {name}: {number}
        </span>
        <button className={style.delete_btn} onClick={() => removeContact(id)}>
            Delete
        </button>
    </li>
)

export default ContactItem
