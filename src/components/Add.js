import React from "react";

const Add = () => {
  return (
    <div>
      <form>
        <input type="file" placeholder="Upload Image" />
        <br />
        <input type="text" placeholder="Enter the Name" />
        <br />
        <input type="text" placeholder="Enter the code" />
        <br />
        <input type="text" placeholder="Enter the Weight" />
        <br />
        <input type="text" placeholder="Enter the Purity" />
        <br />
        <input type="text" placeholder="Enter the Making Charges" />
        <br />
        <input type="text" placeholder="Enter the Price" />
        <br />
        <button type="submit">Submit</button>
        &nbsp;&nbsp;
        <button type="submit"> Cancel</button>
        <br />
      </form>
    </div>
  );
};
export default Add;
