import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
  const [nameColor, setNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (name.length >= 8) {
      setErrorName("");
      setNameColor("green-500");
    } else {
      setNameColor("red-500");
      setErrorName("Username must be up to 8 characters");
    }
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green-500");
    } else {
      setEmailColor("red-500");
      setErrorEmail("Must contain @");
    }
    if (password.length >= 8 && password.toLocaleUpperCase) {
      setPasswordColor("green-500");
      setErrorPassword("");
    } else {
      setPasswordColor("red-500");
      setErrorPassword("Password must contain Uppercase");
    }
    if (password != "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green-500");
    } else {
      setErrorConfirmPassword("Your password does not match");
      setConfirmPasswordColor("blue-500");
    }
  };
  const green = "green-700";
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white flex-col">
      <form>
        <div className="flex items-center justify-center bg-blue-100/50 px-20 w-96 py-10 rounded-2xl flex-col gap-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            className={`ring-1 rounded-xl p-2 w-full `}
            style={{ borderColor: `${nameColor}` }}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p className="text-red-600 font-semibold text-xs ">{errorName}</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className={`ring-1 rounded-xl p-2 ring-${emailColor} w-full`}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-red-600 font-semibold text-xs">{errorEmail}</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className={`ring-1 rounded-xl p-2 ring-${passwordColor} w-full`}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-red-600 font-semibold text-xs">{errorPassword}</p>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            className={`ring-1 rounded-xl p-2 ring-${confirmPasswordColor} w-full`}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <p className="text-red-600 font-semibold text-xs">
            {errorConfirmPassword}
          </p>

          <button
            onClick={validate}
            className="py-2 px-6 ring-1 ring-inset ring-zinc-700 rounded-xl bg-zinc-950 text-white  hover:bg-zinc-800 active:bg-zinc-900 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
