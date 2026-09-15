import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

export default function Userlogin() {
    const mynav = useNavigate()


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

  const login = (e) => {
  e.preventDefault();

  if (
    username === "admin@gmail.com" &&
    password === "12345"
  ) {
    toast.success("Welcome");

    setTimeout(() => {
      mynav("/dashboard");
    }, 1000);
  } else {
    toast.error("Invalid Username or Password");
  }
};

    return (
        <form onSubmit={login}>
        <div className="min-h-screen bg-gradient-to-r from-gray-700 to-blue-500 flex items-center justify-center p-4">
            <div className="w-full max-w-[500px]"> {/* Login Card */}
                <div className="bg-white rounded-3xl p-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white shadow-lg"> </div>
                    <div className="text-center mb-8">
                        <ToastContainer/>
                        <h1 className="text-3xl font-bold"> Welcome Back </h1>
                        <p className="mt-2 text-sm text-gray-500"> Login to your account to continue </p>
                    </div> {/* Form */}
                    
                        {/* username */} <div>
                            <label className="mb-2 block text-gray-800"> Username </label>
                            <input type="email"value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="you@example.com" required className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500" />
                        </div>
                        {/* Password */} <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label className="text-gray-800"> Password </label>
                                <button type="button" className="text-indigo-600 hover:text-indigo-700" > Forgot Password? </button>
                            </div>
                            <div className="relative">
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" required className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 outline-none transition focus:border-indigo-500" />
                                {/* Remember Me */} <div className="flex items-center gap-2 mt-3">
                                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 accent-indigo-600" />
                                    <label htmlFor="remember" className="text-sm text-gray-600" > Remember me </label>
                                </div><br />
                            </div>
                        </div>
                        {/* Login Button */} <button type="submit" className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-xl"  >
                            Login </button>
                 
                    {/* Divider */} <div className="my-7 flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-200">
                        </div>
                        <span className="text-sm text-gray-400"> OR </span>
                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    {/* Signup */} <p className="mt-7 text-center text-sm text-gray-500"> Don't have an account?
                        <button className="font-semibold text-indigo-600 hover:text-indigo-700"> Sign Up </button>
                    </p>
                </div>
                {/* Bottom Text */} <p className="mt-6 text-center text-sm text-white"> © 2026 Your Company. All rights reserved. </p>
            </div> </div>
            </form>
            );
};