import { useState } from "react";

type PropsType = {
  initialData: {
    id: number;
    name: string;
    email: string;
  };
  onSave: (updatedData: { id: number; name: string; email: string }) => void;
};
export default function EditContact({ initialData, onSave }: PropsType) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section className="flex gap-2 flex-col border border-black rounded-sm p-2">
      <label className="">
        Name:{" "}
        <input
          className="border border-black rounded-sm p-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          className="border border-black rounded-sm p-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        className="bg-black text-white rounded-sm"
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        className="bg-black text-white rounded-sm"
        onClick={() => {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
