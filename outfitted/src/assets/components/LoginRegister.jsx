import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Toast from './Toast'
import Cookies from 'js-cookie'

export const Field = ({ label, name, id, placeholder, value, onChange }) => {
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
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export const Login = ({ onClose }) => {
  const [open, setOpen] = useState(true)
  async function handleClick() {
    setOpen(false)
    await new Promise((resolve) => setTimeout(resolve, 500))
    onClose()
  }

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const registrationEndpoint = 'https://outfitted-backend.vercel.app/login/'

    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      const token = data.token // Assuming the token is in the response
      Cookies.set('token', token, {
        expires: 7, // Expires in 7 days
        secure: true, // Only send over HTTPS
        path: '/', // Accessible from all paths in the app
      })
      if (response.ok) {
        console.log('Login successful!', response.status, data.message)
        setFormData({
          username: '',
          password: '',
        })
        onClose()
      } else {
        console.log('Login failed. Please try again.')
      }
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClick}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-semibold text-gray-900">
                          {' '}
                          Login to your account{' '}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleClick}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root space-y-4">
                          <Field
                            label="Your Username"
                            name="username"
                            id="username"
                            placeholder="john123"
                            value={formData.username}
                            onChange={handleInputChange}
                          />
                          <Field
                            label="Password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mx-4 mb-3">
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
                      <a
                        href="/"
                        className="text-sm text-blue-700 hover:underline "
                      >
                        Lost Password?
                      </a>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          {' '}
                          Login to your account{' '}
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          Not registered?{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            {' '}
                            Create account
                            <span aria-hidden="true"> &rarr;</span>{' '}
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
Login.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export const Register = ({ onClose }) => {
  const [showToast, setShowToast] = useState('')
  const [open, setOpen] = useState(true)
  async function handleClick() {
    setOpen(false)
    await new Promise((resolve) => setTimeout(resolve, 500))
    onClose()
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirm_password) {
      setShowToast('Passwords do not match.')
    }
    const registrationEndpoint =
      'https://outfitted-backend.vercel.app/register/'

    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setShowToast(data.message)
        setFormData({
          username: '',
          email: '',
          password: '',
          confirm_password: '',
        })
        // onClose()
      } else {
        setShowToast(data.message)
      }
    } catch (error) {
      setShowToast(error)
    }
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClick}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {' '}
                          Create an account{' '}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleClick}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root space-y-4">
                          <Field
                            label="Your email"
                            name="email"
                            id="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          <Field
                            label="Your Username"
                            name="username"
                            id="username"
                            placeholder="john123"
                            value={formData.username}
                            onChange={handleInputChange}
                          />
                          <Field
                            label="Password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                          <Field
                            label="Confirm Password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="••••••••"
                            value={formData.confirm_password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto w-72">
                      {showToast != '' && <Toast message={showToast} />}
                      {/* TODO: Add toast for login */}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          {' '}
                          Sign up for an account{' '}
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            {' '}
                            Login<span aria-hidden="true"> &rarr;</span>{' '}
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
Register.propTypes = {
  onClose: PropTypes.func.isRequired,
}
//https://tailwindcomponents.com/component/tailwind-css-loginregister-modal
// https://flowbite.com/docs/components/modal/
