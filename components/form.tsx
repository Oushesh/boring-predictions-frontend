import React, { useState } from "react";

type Product = {
  name: string;
  ifc_class: string;
  thickness: number;
};

const MyForm = () => {
  const [formData, setFormData] = useState<Product>({
    name: "",
    ifc_class: "",
    thickness: 0,
  });
  const [formHtml, setFormHtml] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      "http://127.0.0.1:8000/api/products/material?export_results=true",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    setFormHtml(data.form_html);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="content-evenly">
      <form onSubmit={handleSubmit}>
        <div className="content-evently">
        <div>
        <label>
          Name:
          <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
              placeholder={"name"}
          />
        </label>
        </div>
        <div>
        <label>
          IFC Class:
          <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="ifc_class"
            value={formData.ifc_class}
            onChange={handleInputChange}
              placeholder={"ifc_class"}
          />
        </label>
          </div>
        <div>
        <label>
          Thickness:
          <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="number"
            name="thickness"
            value={formData.thickness}
            onChange={handleInputChange}
              placeholder={"thickness"}
          />
        </label>
        <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
        >
            Submit Now
        </button>
        </div>
      </div>
      </form>
      <div dangerouslySetInnerHTML={{ __html: formHtml }}></div>
    </div>
  );
};
export default MyForm;

//https://v1.tailwindcss.com/components/forms