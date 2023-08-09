import React from "react";

const Admissions = () => {
  const afterSubmission = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form method="post" onSubmit={afterSubmission}>
        <input type="text" name="name" />
        <input type="submit" value="Submit" onclick="this.preventDefault();" />
      </form>
    </>
  );
};

export default Admissions;
