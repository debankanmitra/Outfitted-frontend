import PropTypes from "prop-types";
import { useState } from "react";

const Field = ({ label, name, id, placeholder,value, onChange }) => {
  return (
    <div>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type={name}
      name={name}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const CloseSvg = () => {
  return (
    <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0  0  14  14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1  1  6  6m0  0  6  6M7  7l6-6M7  7l-6  6"
    />
  </svg>
  );
};

export const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    // acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationEndpoint = 'https://outfitted-backend.vercel.app/login/';
    console.log(JSON.stringify(formData));

    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Sign in to our platform
            </h3>
            <button
              onClick={onClose}
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <CloseSvg/>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit} >
              <Field label="Your username" name="username" id="username" placeholder="john123" value={formData.username}  onChange={handleInputChange} />
              <Field label="Your password" name="password" id="password" placeholder="••••••••" value={formData.password}  onChange={handleInputChange} />
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Remember me
                  </label>
                </div>
                <a href="/" className="text-sm text-blue-700 hover:underline ">
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 ">
                Not registered?{" "}
                <a href="/" className="text-blue-700 hover:underline ">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export const Register = ({ onClose }) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    // acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!formData.acceptTerms) {
    //   console.log('Please accept the terms and conditions.');
    //   return;
    // }
    const registrationEndpoint = 'https://outfitted-backend.vercel.app/register/';
    console.log(JSON.stringify(formData));

    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // if (data.status === 'success') {
      //   console.log('Registration successful!');
      //   onClose();
      // }else {
      //   console.log('Registration failed. Please try again.');
      // }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Create an account
            </h3>
            <button
              onClick={onClose}
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <CloseSvg/>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            <form id="register" className="space-y-4" onSubmit={handleSubmit}>

              <Field label="Your email" name="email" id="email" placeholder="name@company.com" value={formData.email}  onChange={handleInputChange} />
              <Field label="Username" name="username" id="username" placeholder="john123" value={formData.username}  onChange={handleInputChange} />
              <Field label="Password" name="password" id="password" placeholder="••••••••" value={formData.password}  onChange={handleInputChange} />
              <Field label="Confirm Password" name="confirm_password" id="confirm_password" placeholder="••••••••" value={formData.confirm_password}  onChange={handleInputChange} />
              
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    I accept the&nbsp;
                  </label>
                </div>
                <a href="/" className="text-sm text-blue-700 hover:underline ">
                  Terms and Conditions
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Register
              </button>
              <div className="text-sm font-medium text-gray-500 ">
                Already have an account?{" "}
                <a href="/" className="text-blue-700 hover:underline ">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Register.propTypes = {
  onClose: PropTypes.func.isRequired,
};
//https://tailwindcomponents.com/component/tailwind-css-loginregister-modal
// https://flowbite.com/docs/components/modal/

