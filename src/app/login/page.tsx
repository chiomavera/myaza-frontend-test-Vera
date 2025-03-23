"use client"; 

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const router = useRouter(); 
  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", { email, password });
      
      // Redirect to the dashboard
      router.push("/dashboard");
    }
  };


  return (
    <div className="flex min-h-screen w-full max-w-[1440px] mx-auto">
      {/* Left Section - Login Form */}
      <section className="flex flex-col  w-1/2 pt-36 px-8 sm:px-12 lg:px-20 xl:px-40 bg-foreground">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <Image src="/logo2.svg" alt="Brand logo" width={31} height={31} />
          <Image src="/uifry.svg" alt="Brand name" width={60} height={27} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-white">
          Welcome back, Ali Riaz 🙇🏾‍♀️
        </h1>
        <p className="text-lightText text-base tracking-tight">
          Login to access your Uifry account
        </p>

        {/* Login Form */}
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium capitalize tracking-[0.28px]">
              Email Address
            </label>
            <input
              className="w-[424px] h-12 text-lightText border border-[#DCD9D9] rounded-sm px-2 text-sm font-normal tracking-[0.28px]"
              type="email"
              placeholder="E.g Aliriaz@Uifry.com"
              value={email}
              autoComplete="false"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium capitalize tracking-[0.28px]">
              Password
            </label>
            <div className="relative">
              <input
                className="w-[424px] h-12 text-[#DCD9D9] !bg-transparent border border-[#DCD9D9] rounded-sm pr-10 px-2 text-sm font-normal tracking-[0.28px]"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="false"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 text-[#CBC8FF] text-sm font-bold cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <Link href="#" className="block w-full text-right text-base font-bold">
              I forgot My Password
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-[424px] h-12 mt-12 bg-lightBg text-foreground text-base font-bold border rounded-sm cursor-pointer"
          >
            Login
          </button>
          
          {/* Signup Link */}
          <div className="flex justify-center items-center">
            <span className="text-base font-semibold tracking-[0.64px]">Not Ali Riaz?</span>
            <Link href="#" className="text-lightBg text-base font-bold tracking-[0.64px]">
              Signup To Continue
            </Link>
          </div>
        </form>
      </section>

      {/* Right Section - Testimonial & Dashboard Preview */}
      <section className=" flex flex-col justify-center items-start w-1/2 pt-16 lg:pl-16">
        {/* Testimonial */}
        <div className="max-w-md">
          <Image src="/star.svg" alt="Star rating" width={120} height={20} className="w-auto h-auto" />
          <p className="text-4xl 3xl:text-5xl font-bold leading-snug text-white mt-4">
            “I’ve been using Uifry for over a year, and it’s helped simplify all my payments.”
          </p>
          <span className="block text-[#CBC8FF] text-xl font-bold mt-3">Ali Riaz</span>
          <span className="block text-[#CBC8FF] text-base font-medium">Singapore</span>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="w-6 h-3 bg-[#CBC8FF] rounded-full"></span>
            <span className="w-3 h-3 bg-[#27264E] rounded-full"></span>
            <span className="w-3 h-3 bg-[#27264E] rounded-full"></span>
            <span className="w-3 h-3 bg-[#27264E] rounded-full"></span>
          </div>
        </div>

        {/* Dashboard Screenshot */}
        <div className="w-full">
          <Image
            src="/Group.svg"
            alt="Dashboard preview"
            width={920}
            height={580}
            className="w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Login;
