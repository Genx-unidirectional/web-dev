"use client";
import { ChangeEvent, useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    active: false,
    products: false,
    gender: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => {
      return { ...prev, [name]: newValue };
    });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="w-1/2 flex justify-center items-center flex-col"
      >
        <input
          className="border border-black text-black p-2 w-full"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="border border-black text-black p-2 w-full"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          className="border border-black text-black p-2 w-full"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="products"
          id=""
          checked={formData.products}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value={"male"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
export default SimpleForm;
