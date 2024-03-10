import React from "react";
const users = [
  {
    name: "john",
    contacts: [{ whatsapp: 1234567890 }, { email: "input.output@gmail.com" }],
  },
  {
    name: "Sydney",
    contacts: [{ whatsapp: 1288999 }, { email: "you.output@gmail.com" }],
  },
];
function Test() {
  return (
    <>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.name}</h2>
            {user.contacts.map((contact) => {
              return (
                <div>
                  <p>Whatsapp:{contact.whatsapp}</p>
                  <p>{contact.email}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
export default Test;
