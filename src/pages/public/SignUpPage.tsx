import React from "react";
import PointText from "../../components/text/PointText";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterForm } from "type/user/user";

const SignUpPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initValue: RegisterForm = {
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  };
  return (
    <div className="mt-2 items-center z-10">
      <div className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden space-y-10">
        <PointText text="Sign Up" />
        <div className="mb-10">
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
            <input
              className="block p-2 w-full text-lg focus:outline-none bg-transparent"
              type="text"
              placeholder="nickname"
            />
          </div>
        </div>
        <div className="mb-10">
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
            <input
              className="block p-2 w-full text-lg focus:outline-none bg-transparent"
              type="text"
              placeholder="email"
            />
          </div>
        </div>
        <div className="mb-10">
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
            <input
              className="block p-2 w-full text-lg focus:outline-none bg-transparent"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div className="mb-10">
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
            <input
              className="block p-2 w-full text-lg focus:outline-none bg-transparent"
              type="password"
              placeholder="password 확인"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 w-full font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 "
        >
          Sign Up
        </button>
        <div>
          <a
            className="underline text-sm text-gray-600 hover:text-gray-900"
            href="/"
          >
            Login 화면으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
