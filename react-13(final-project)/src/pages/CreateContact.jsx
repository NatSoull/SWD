/* eslint-disable no-unused-vars */
import { TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import Cookies from "js-cookie";
import React from "react";
import { useCreateContactMutation } from "../redux/api/contactApi";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {
  const token = JSON.parse(Cookies.get(`token`));

  const [createContact, isLoading] = useCreateContactMutation();

  const nav = useNavigate()

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },

    validate: {
      name: hasLength({ min: 4}, "Name must be 4-10 characters long"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: hasLength(
        { min: 7, max: 11 },
        "Phone Number must have 7 or more"
      ),
      address: hasLength({ min: 2 }, "Please enter your real address"),
    },
  });
  return (
    <div className=" flex h-screen justify-center items-center">
      <form
        onSubmit={form.onSubmit(async (values) => {
          // console.log(values)
          const {data} = await createContact({ token, newContact: values });
          console.log(data);
          if(data.success){
            nav(`/`)
          }
        })}
        className=" w-96 flex flex-col gap-10 border shadow p-10 pt-5 rounded-xl"
      >
        <h1 className=" text-gray-800 text-2xl font-semibold">
          Create New Contact
        </h1>
        <TextInput placeholder="Your name..." {...form.getInputProps("name")} />
        <TextInput
          placeholder="Your email..."
          {...form.getInputProps("email")}
        />
        <TextInput
          placeholder="Phone number"
          {...form.getInputProps("phone")}
        />
        <TextInput
          placeholder="Your Address..."
          {...form.getInputProps("address")}
        />
        <button type="submit" className=" bg-blue-800 text-white py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
