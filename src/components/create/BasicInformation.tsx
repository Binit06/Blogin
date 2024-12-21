import React, { ChangeEvent } from "react";
import "./css/BasicInformation.css"

interface BasicInformationProps {
  value: {
    name: string;
    email: string;
    title: string;
  };
  setValue: (value: BasicInformationProps['value']) => void;
  errors: {
    name?: string;
    email?: string;
    title?: string;
  };
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  value,
  setValue,
  errors,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="basic-information-container">
      <div className="form-container">
        <h2>Basic Information</h2>

        <div className="input-section">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={value.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={value.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={value.title}
              onChange={handleChange}
              required
            />
            {errors.title && <p className="error-text">{errors.title}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;

