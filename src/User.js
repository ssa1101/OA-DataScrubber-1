import React from "react";

export default function User({
  user: { id, firstName, lastName, dob, age, email },
}) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dob}</td>
      <td>{age}</td>
      <td>{email}</td>
    </tr>
  );
}
