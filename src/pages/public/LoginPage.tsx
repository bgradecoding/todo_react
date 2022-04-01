import React from "react";
import Input from "../../components/input/Input";
import PointText from "../../components/text/PointText";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className="mt-2 items-center z-10">
      <form className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden space-y-10">
        <PointText text="Login" />
        <Input placeholder="e-mail" type="e-mail" name="e-mail" />
        <Input placeholder="password" type="password" name="password" />

        <div className="flex items-center justify-end mt-4">
          <a
            className="underline text-sm text-gray-600 hover:text-gray-900"
            href="#"
          >
            sign up
          </a>
          <button className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 ">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
