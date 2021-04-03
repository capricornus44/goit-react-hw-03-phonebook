import React, { Component } from "react"
import Form from "./components/Form"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import { v4 as uuidv4 } from "uuid"

import "./App.scss"

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Ilona", number: "+48-675-623-433" },
      // { id: "id-2", name: "Anton", number: "+48-796-284-745" },
      // { id: "id-3", name: "Andrzej", number: "+48-987-245-714" },
      // { id: "id-4", name: "Anna", number: "+48-133-815-019" },
    ],
    filter: "",
  }

  handleAddContact = (data) => {
    const { contacts } = this.state
    const newContact = { ...data, id: uuidv4() }

    if (contacts.map((contact) => contact.name.toLowerCase()).includes(data.name.toLowerCase())) {
      alert(`Contact "${data.name}" already exists`)
    } else {
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }))
    }
  }

  handleFilter = (event) => {
    const { value } = event.currentTarget
    this.setState({ filter: value })
  }

  getMatchingContacts = () => {
    const { contacts, filter } = this.state

    const optimizedFilter = filter.toLowerCase()

    return contacts.filter((contact) => contact.name.toLowerCase().includes(optimizedFilter))
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }))
  }

  componentDidMount() {
    console.log("App componentDidMount")

    const contacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(contacts)

    console.log(parsedContacts)
    this.setState({ contacts: parsedContacts })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate")

    if (this.state.contacts !== prevState.contacts) {
      console.log("The contacts field has been updated")

      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }

    // console.log(prevState)
    // console.log(this.state)
  }

  render() {
    const { filter } = this.state
    const filteredContacts = this.getMatchingContacts()

    return (
      <div className="container">
        <section title="Phonebook" className="section">
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleAddContact} />
        </section>

        <section title="Contacts" className="section">
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </section>
      </div>
    )
  }
}

export default App
