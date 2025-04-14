"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const users = {
    Gastrotools: "Gastrotools123",
    Magasin: "Magagasin123",
    Illums_bolighus: "Illum_illum123",
    Bahne: "Babahne123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (users[username] && users[username] === password) {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/forside");
    } else {
      setError("Forkert brugernavn eller adgangskode");
    }
  };

  return (
    <main className="flex-col place-items-center h-full gap-16">
      <div className="flex flex-row gap-6 place-items-center">
        <Image
          src="/img/gastrotools_symbol_positive_rgb.png"
          width={80}
          height={60}
          alt="thumbnail"
          className="cursor-pointer rounded-lg "
        />
        <h1>Login</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-6 place--center mb-32"
      >
        <div className="flex flex-wrap place-content-evenly gap-4">
          <label htmlFor="username">Brugernavn:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" Brugernavn"
            required
            className="border-solid border rounded-sm"
          />
        </div>
        <div className="flex flex-wrap place-content-evenly gap-4">
          <label htmlFor="password">Adgangskode:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" Adgangskode"
            required
            className="border-solid border rounded-sm"
          />
        </div>
        {error && <p>{error}</p>}
        <button
          type="submit"
          className="cursor-pointer place-self-center border border-solid w-fit py-2 px-4 rounded-3xl  hover:bg-black-10"
        >
          Log ind
        </button>
      </form>
    </main>
  );
};

export default Login;
