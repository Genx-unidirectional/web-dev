"use client";
import { useState } from "react";

function Button() {
  const [user, setUser] = useState(true);
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  return (
    <div className="flex h-screen w-full justify-center flex-col gap-4 items-center">
      <div className="flex justify-center items-center  gap-3">
        <button
          onClick={() => {
            setUser(!user);
          }}
          className="text-black bg-white p-2 rounded-md"
        >
          Button
        </button>
        {user ? <Admin /> : <User />}
      </div>
      <ul className="bg-white text-black p-3 rounded-md">
        {products.map((product) => {
          return <li key={`${product.id}x5`}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default Button;

function Admin() {
  return <h2>This is admin</h2>;
}
function User() {
  return <h2>This is normal suser</h2>;
}
