import React from "react";
import axios from "axios";
import success from "../../assets/success.svg";
import failed from "../../assets/failed.svg";
import usersImg from "../../assets/users.svg";

const TableRow = ({ todo, user }) => {
  const DeleteUsers = async (id) => {
    try {
      const deleted = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      console.log(`Number ${user.id} user has been deleted!`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <tr className="border-b">
      <td className="p-2">
        <input type="checkbox" className="w-[15px] h-[15px] cursor-pointer" />
      </td>
      <td className="p-2">
        <img src={usersImg} />
      </td>
      <td className="p-2">{todo.title}</td>
      <td className="p-2">{user.email}</td>
      <td className="p-2">{`city: ${user.address.city}`}</td>
      <td className="p-2">{user.address.zipcode}</td>
      <td className="p-2">
        <span className="flex justify-center items-center">
          {todo.completed ? <img src={success} /> : <img src={failed} />}
        </span>
      </td>
      <td className="p-2">
        <button
          onClick={DeleteUsers}
          className="bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
