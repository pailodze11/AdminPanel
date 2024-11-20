import React from "react";
import Tbody from "../atoms/Tbody";

const Table = ({ todos, users }) => {
  return (
    <table className="w-full">
      <thead className="border-b">
        <tr>
          <th className="w-[80px] p-1">Select</th>
          <th className=" p-2 ">Image</th>
          <th className="w-[432px] p-2 ">Title</th>
          <th className="w-[236px] p-2 ">Email</th>
          <th className="w-[203px] p-2 ">Address</th>
          <th className="w-[306px] p-2 ">ZipCode</th>
          <th className="w-[235px] p-2 ">Status</th>
          <th className="w-[115px] p-2 ">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {todos.map((todo, index) => (
          <Tbody key={todo.id} todo={todo} user={users[index]} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
