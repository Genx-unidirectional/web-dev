"use client";
import { useState } from "react";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId)!;

  function handleSave(updatedData: {
    id: number;
    name: string;
    email: string;
  }) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div className="text-black flex flex-col border border-black rounded-sm p-2">
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id: number) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
