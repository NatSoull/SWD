/* eslint-disable no-unused-vars */
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/services/authSlice";
import { hasLength, useForm } from "@mantine/form";

const Login = () => {
  // const [email, setEmail] = useState("natsoul@gmail.com");
  // const [password, setPassword] = useState("697050331");

  const dispatch = useDispatch();

  const nav = useNavigate();

  const [login, { isFetching, isLoading }] = useLoginMutation();

  const form = useForm({
    initialValues: {
      email: "admin@gmail.com",
      password: "admin123",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: hasLength({ min: 8 }, 'Your password must have 8  or more'),
    },
  });

  // const loginHandler = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const loginData = { email, password };
  //     const { data } = await login(loginData);
  //     console.log(data);

  //     if (data?.success) {
  //       const dataStock = { user: data.user, token: data.token };
  //       dispatch(addUser(dataStock));
  //       nav(`/`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className=" flex h-screen justify-center items-center">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const { data } = await login(values);
            console.log(data);
            if (data.success) {
              dispatch(addUser(data))
              nav(`/`);
            }
          } catch (error) {
            console.log("error");
          }
        })}
        className=" w-96 flex flex-col gap-10 border shadow p-10 pt-5 rounded-xl"
      >
        <h1 className=" text-gray-800 text-2xl font-semibold">Login</h1>

        <TextInput
          placeholder="Your email..."
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="New password..."
          {...form.getInputProps("password")}
        />

        <div className=" flex gap-5">
          <p className=" select-none text-gray-800">You dont have a account?</p>
          <Link to={`/register`}>
            <p className=" cursor-pointer select-none text-gray-800">Sign up</p>
          </Link>
        </div>
        <button disabled={isLoading} type="submit" className=" bg-blue-800 text-white py-2 rounded">
          {isFetching || isLoading ? (
            <Loader color="gray" className=" mx-auto" variant="dots" />
          ) : (
            "sign in"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
