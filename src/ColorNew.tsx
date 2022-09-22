import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { NewColorProps } from "./types";

function ColorNew({ colors, add }: NewColorProps): JSX.Element {
  const INITIAL_FORM_DATA = {
    name: "",
    code: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    add(formData);
    setFormData(INITIAL_FORM_DATA);
    navigate("/colors");
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <div className="ColorNew">
      <h2>Add a new color</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input id="name" name="name" type="text" onChange={handleChange} />
        <label htmlFor="code" />
        <input id="code" name="code" type="color" onChange={handleChange} />
        <button>Add Color</button>
      </form>
      <Link to="/colors">All colors</Link>
    </div>
  );
}

export default ColorNew;
