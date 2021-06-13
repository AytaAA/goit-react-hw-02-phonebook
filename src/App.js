import React, { Component } from "react"
//data
import initialContacts from "./data/contacts.json"
//components
import Filter from "./Components/Filter"
import Container from "./Components/Container"
import ContactForm from "./Components/ContactForm"
import ContactList from "./Components/ContactList"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
    state = {
        contacts: initialContacts,
        name: "",
        filter: "",
    }

    addContact = ({ name, number }) => {
        const { contacts } = this.state
        const normalizedName = name.toLocaleLowerCase()
        const contact = {
            id: uuidv4(),
            name,
            number,
        }

        contacts.some((contact) => contact.name.toLocaleLowerCase() === normalizedName)
            ? alert("Такой контакт существует")
            : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
    }

    removeContact = (contactId) => {
        const prevContacts = this.state.contacts
        const removeIndex = prevContacts.map((item) => item.id).indexOf(contactId)
        ~removeIndex && prevContacts.splice(removeIndex, 1)

        this.setState({ contacts: prevContacts })
    }
    changeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value })
    }

    render() {
        const { contacts, filter } = this.state

        const normalizedFilter = filter.toLocaleLowerCase()

        const filteredContacts = contacts.filter((contact) =>
            contact.name.toLocaleLowerCase().includes(normalizedFilter)
        )

        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />

                <h1>Contacts</h1>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList contacts={filteredContacts} removeContact={this.removeContact} />
            </Container>
        )
    }
}

export default App
