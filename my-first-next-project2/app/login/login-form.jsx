"use client";

import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const valiDateForm = () => {
        if(!email){
            setEmailError("Email is Required");
            return false;
        }else{
            setEmailError("");
        }

        if(!password){
            setPasswordError("Password is Mandatory");
            return false;
        }else{
            setPasswordError("");
        }

        return true;
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = valiDateForm();
        if(isValid) {
        console.log("Form Data : " , {email : email, password: password});
        }
    };

  return (
    <div className="w-[300px] mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
          <form  onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-center text-xl font-semibold text-gray-900">
              Sign in to Mflix{" "}
            </h3>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold  text-gray-900 block mb-2"
              >
                Your Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300  rounded-lg text-gray-900 ring-1 ring-offset-2 focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5 "
                placeholder="yourname@gmail.com"
              />
              {emailError && <div className="text-red-600 text-sm mt-2">{emailError}</div>}

            </div>

            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-semibold  text-gray-900 block mb-2"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300  rounded-lg text-gray-900 ring-1 ring-offset-2 focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5 "
                placeholder="********"
              />
              {passwordError && <div className="text-red-600 text-sm mt-2">{passwordError}</div>}
            </div>

            {/* remember me */}
            <div className="flex iems-start">
            <div className="flex flex-row">
                <div className="items-flex-center h-5">
                <input id="remember"  type="checkbox"  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                </div>

                <div className="text-sm ml-3">
                <lable htmlFor="remenber" className="font-meadium text-gray-900"> Remember me </lable>
                </div>

            </div>

            <a href="/forget password" className="text-sm text-blue-700 font-semibold hover:underline ml-auto"> Forget Password?</a>
            </div>

           { /* submit button */}
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg px-5 py-2.5"> Sign In </button>
        
           <div className="flex justify-center text-sm font-meadium text-gray-500 space-x-1">
            <span>Not Regestered?{" "}</span>
            <a href="/register" className="text-blue-700 hover:underline">Create an Account</a>
           </div>

          </form>
        </div>
      </div>
  );
}

