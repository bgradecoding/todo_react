import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../data/rootActions";
import { Form, Formik, Field, ErrorMessage } from "formik";
import PointText from "../../components/text/PointText";
import * as Yup from "yup";
import { LoginForm } from "type/user/user";
import { useNavigate } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("email은 필수항목입니다."),
  password: Yup.string().required("password는 필수항목입니다."),
});

const LoginPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initValue: LoginForm = {
    email: "",
    password: "",
  };
  const goLogin = async (values: LoginForm): Promise<void> => {
    dispatch(actions.user.login(values, navigate));
  };
  return (
    <div className="mt-2 items-center z-10">
      <div className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden space-y-10">
        <PointText text="Login" />
        <Formik
          initialValues={initValue}
          validationSchema={ValidationSchema}
          onSubmit={goLogin}
        >
          <Form>
            <div className="mb-10">
              <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="block p-2 w-full text-lg focus:outline-none bg-transparent"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-xs text-red-500 py-1"
              />
            </div>
            <div className="mb-10">
              <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
                <Field
                  name="password"
                  type="password"
                  className="block p-2 w-full text-lg focus:outline-none bg-transparent"
                  placeholder="Password"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-red-500 py-1"
              />
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                className="underline text-sm text-gray-600 hover:text-gray-900"
                href="{()=>false}"
              >
                sign up
              </a>
              <button
                type="submit"
                className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 "
              >
                Log in
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
