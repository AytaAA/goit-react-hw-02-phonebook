import React, { Component } from "react"
import style from "./ContactForm.module.css"

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }
    onInputChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({ [name]: value })
    }

    onHandleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }
    reset = (e) => {
        this.setState({
            name: "",
            number: "",
        })
    }
    render() {
        return (
            <div className={style.form_container}>
                <form onSubmit={this.onHandleSubmit}>
                    <h2 className={style.form_label}>Name</h2>
                    <input
                        className={style.input}
                        onChange={this.onInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={this.state.name}
                    />
                    <h2 className={style.form_label}>Number</h2>
                    <input
                        className={style.input}
                        onChange={this.onInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                    />
                    <br />
                    <button type="submit" className={style.add_button}>
                        {" "}
                        Add contact
                    </button>
                </form>
            </div>
        )
    }
}
export default ContactForm
