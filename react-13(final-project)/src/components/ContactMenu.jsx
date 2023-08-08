/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Menu, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDeleteContactMutation } from "../redux/api/contactApi";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const ContactMenu = (props) => {
  const contact = props.contact;
  // console.log(contact);

  const token = JSON.parse(Cookies.get(`token`));

  const [deleteContact] = useDeleteContactMutation();

  const deleteContactHandler = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Contact has been deleted.", "success");
        const data = await deleteContact({ token, id: contact?.id });
        console.log(data);
      }
    });
  };

  return (
    <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button>Setting</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Danger zone</Menu.Label>
          <Link to={`/contact-info/${contact.id}`}>
            <Menu.Item>Contact Info</Menu.Item>
          </Link>
          <Menu.Item
            onClick={() => deleteContactHandler()}
            className=" text-red-600 cursor-pointer select-none"
            color="red"
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ContactMenu;
