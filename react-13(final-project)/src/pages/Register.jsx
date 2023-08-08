/* eslint-disable no-unused-vars */
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";
import { hasLength, isInRange, useForm } from "@mantine/form";

const Register = () => {
  const [register , {isFetching , isLoading}] = useRegisterMutation();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password_confirmation, setPasswordConfirmation] = useState("");

  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      name: hasLength({ min: 4, max: 10 }, "Name must be 4-10 characters long"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: hasLength({ min: 8 }, 'Your password must have 8  or more'),
      password_confirmation: hasLength({ min: 8 }, 'Your password must have 8  or more'),
    },
  });

  // const registerHandler = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const user = { name, email, password, password_confirmation };
  //     const data = await register(user);
  //     console.log(data);
  //     if(data.data.success === true){
  //       nav(`/login`)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className=" flex h-screen justify-center items-center">
      <form
        onSubmit={form.onSubmit(async(values) => {
          try {
            const {data} = await register(values)
            console.log(data)
            if(data.success){
              nav(`/login`)
            }
          } catch (error) {
            console.log("error")
          }
        })}
        className=" w-96 flex flex-col gap-10 border shadow p-10 pt-5 rounded-xl"
      >
        <h1 className=" text-gray-800 text-2xl font-semibold">Register</h1>
        <TextInput placeholder="Your Name..." {...form.getInputProps("name")} />
        <TextInput
          placeholder="Your email..."
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="New password..."
          {...form.getInputProps("password")}
        />
        <PasswordInput
          placeholder="Confirm password..."
          {...form.getInputProps("password_confirmation")}
        />
        <div className=" flex gap-5">
          <p className=" select-none text-gray-800">Already have a account?</p>
          <Link to={`/login`}>
            <p className=" cursor-pointer select-none text-gray-800">Login</p>
          </Link>
        </div>
        <button disabled={isLoading} type="submit" className=" bg-blue-800 text-white py-2 rounded">
          {isFetching || isLoading ? <Loader className=" mx-auto" variant="dots" /> : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Register;
