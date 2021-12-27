import React, { useState } from "react";

const Add = () => {
  const [data, setData] = useState({
    filename: null,
    name: "",
    code: "",
    weight: "",
    purity: "",
    charges: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  let { filename, name, code, weight, purity, charges, price } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <br />
        <input
          type="text"
          placeholder="Enter the Name"
          name="name"
          value={name}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the code"
          name="code"
          value={code}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the Weight"
          name="weight"
          value={weight}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the Purity"
          name="purity"
          value={purity}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the Making Charges"
          value={charges}
          onChange={changeHandler}
          name="charges"
        />
        <br />
        <input
          type="text"
          placeholder="Enter the Price"
          name="price"
          value={price}
          onChange={changeHandler}
        />
        <br />
        <button type="submit" name="submit">
          Submit
        </button>
        &nbsp;&nbsp;
        <button type="submit"> Cancel</button>
        <br />
      </form>
    </div>
  );
};
export default Add;
