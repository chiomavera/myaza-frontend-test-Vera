"use client"; 

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "/Public/Logo.svg";
import BrandName from "/Public/uifry.svg";
import Star from "/Public/star.svg"

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
    <div className="flex flex-col lg:flex-row min-h-screen w-full max-w-[1440px] mx-auto 2xl:max-w-[1800px]">
      {/* Left Section - Login Form */}
      <section className="flex flex-col w-full lg:w-1/2 pt-10 md:pt-20 lg:pt-36 2xl:pt-48 px-6 sm:px-8 md:px-12 lg:pl-16 xl:px-20 2xl:px-32 bg-foreground">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-6 2xl:mb-8">
          <BrandLogo size="31.042" className="text-[#6359E9] 2xl:w-10 2xl:h-10" />
          <BrandName width="60.158" height="26.755" className="2xl:w-72 2xl:h-auto"/>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-white text-center">
          Welcome back, Ali Riaz 🙇🏾‍♀️
        </h1>
        <p className="text-lightText text-base 2xl:text-lg tracking-tight text-center">
          Login to access your Uifry account
        </p>

        {/* Login Form */}
        <form className="flex flex-col gap-4 2xl:gap-6 mt-4 2xl:mt-8 mx-auto lg:mx-0 w-full max-w-md 2xl:max-w-xl" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex flex-col gap-2 2xl:gap-3 w-full">
            <label className="text-sm 2xl:text-base font-medium capitalize tracking-[0.28px]">
              Email Address
            </label>
            <input
              className="w-full h-12 2xl:h-14 text-lightText border border-[#DCD9D9] rounded-sm px-2 2xl:px-4 text-sm 2xl:text-base font-normal tracking-[0.28px]"
              type="email"
              placeholder="E.g Aliriaz@Uifry.com"
              value={email}
              autoComplete="false"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm 2xl:text-base">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 2xl:gap-3 w-full">
            <label className="text-sm 2xl:text-base font-medium capitalize tracking-[0.28px]">
              Password
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-12 2xl:h-14 text-[#DCD9D9] !bg-transparent border border-[#DCD9D9] rounded-sm px-2 2xl:px-4 text-sm 2xl:text-base font-normal tracking-[0.28px]"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="false"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 2xl:right-4 top-1/2 transform -translate-y-1/2 text-[#CBC8FF] text-sm 2xl:text-base font-bold cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm 2xl:text-base">{errors.password}</p>}
            <Link href="#" className="block w-full text-[#CBC8FF] text-right text-base 2xl:text-lg font-bold">
              I forgot My Password!
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full h-12 2xl:h-14 mt-8 sm:mt-12 bg-lightBg text-foreground text-base 2xl:text-lg font-bold border rounded-sm cursor-pointer"
          >
            Login
          </button>
          
          {/* Signup Link */}
          <div className="flex justify-center items-center gap-2 mt-2 2xl:mt-4">
            <span className="text-sm sm:text-base 2xl:text-lg font-semibold tracking-[0.64px]">Not Ali Riaz?</span>
            <Link href="#" className="text-lightBg text-sm sm:text-base 2xl:text-lg font-bold tracking-[0.64px]">
              Login To Continue
            </Link>
          </div>
        </form>
      </section>

      {/* Right Section - Testimonial & Dashboard Preview */}
      <section className="hidden lg:flex flex-col justify-center items-start w-full lg:w-1/2 pt-16 2xl:pt-24 lg:pl-8 xl:pl-16 2xl:pl-24">
        {/* Testimonial */}
        <div className="max-w-md 2xl:max-w-2xl">
          <Star size="120" className="w-auto h-auto 2xl:scale-125 2xl:origin-left"/>
          <p className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold leading-snug 2xl:leading-normal text-white mt-4 2xl:mt-6">
            "I've been using Uifry for over a year, and it's helped simplify all my payments."
          </p>
          <span className="block text-[#CBC8FF] text-xl 2xl:text-2xl font-bold mt-3 2xl:mt-6">Ali Riaz</span>
          <span className="block text-[#CBC8FF] text-base 2xl:text-lg font-medium">Singapore</span>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-4 2xl:mt-8 2xl:gap-3">
            <span className="w-6 2xl:w-8 h-3 2xl:h-4 bg-[#CBC8FF] rounded-full"></span>
            <span className="w-3 2xl:w-4 h-3 2xl:h-4 bg-[#27264E] rounded-full"></span>
            <span className="w-3 2xl:w-4 h-3 2xl:h-4 bg-[#27264E] rounded-full"></span>
            <span className="w-3 2xl:w-4 h-3 2xl:h-4 bg-[#27264E] rounded-full"></span>
          </div>
        </div>

        {/* Dashboard Screenshot */}
        <div className="w-full 2xl:mt-8">
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