/* eslint-disable no-unused-vars */
import { Table, TextInput } from "@mantine/core";
import React, { useEffect } from "react";
import { useGetContactQuery } from "../redux/api/contactApi";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContacts, setSearchTerm } from "../redux/services/contactSlice";
import ContactMenu from "./ContactMenu";

const Contact = () => {
  const token = JSON.parse(Cookies.get(`token`));
  const { data, isLoading } = useGetContactQuery(token);
  // console.log(data?.contacts?.data);

  const dispatch = useDispatch();
  const contacts = useSelector((data) => data?.contactSlice?.contacts);
  const searchTerm = useSelector((data) => data?.contactSlice?.searchTerm);

  useEffect(() => {
    dispatch(addContacts(data?.contacts?.data));
  }, [data]);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className=" mt-20">
      <div className=" flex items-center ms-10 gap-4">
        <Link to={`/create`} className=" flex items-center">
          <button className=" bg-blue-500 text-white py-1 px-5">
            Create new Contact
          </button>
        </Link>
        <TextInput variant="filled" placeholder="Search . . ." onChange={e => dispatch(setSearchTerm(e.target.value))} />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            ?.filter((item) => {
              if (searchTerm === ``) {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchTerm)
              ) {
                return item;
              }
            })
            .map((contact) => {
              return (
                <tr key={contact.id} className="">
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>
                  <ContactMenu contact={contact}/>
                </tr>
              );
            })}
        </tbody>
        {/* <tbody>{rows}</tbody> */}
      </Table>
    </div>
  );
};

export default Contact;
