import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className=" flex max-w-full h-screen justify-center items-start">
      <section className="bg-foreground flex flex-col gap-6 w-[710px] pt-[148px] pr-[86px] pb-[396.535px] pl-[200px]">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex justify-center items-center gap-2 ">
            <Image
              src="/logo2.svg"
              alt="Brand logo"
              width={31.042}
              height={31.042}
            />
            <Image
              src="/uifry.svg"
              alt="Brand logo"
              width={60.158}
              height={26.755}
            />
          </div>
          <h1 className="text-2xl font-bold ">Welcome back, Ali Riaz 🙇🏾‍♀️</h1>
          <p className="text-lightText text-base font-normal tracking-[-0.64px]">
            Login to access your Uifry account
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium capitalize tracking-[0.28px]">
              Email Address
            </label>

            <input
              className="w-[424px] h-[48px] text-lightText border border-[#DCD9D9] rounded-sm px-2 text-sm font-normal tracking-[0.28px]"
              type="email"
              placeholder="E.g Aliriaz@Uifry.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium capitalize tracking-[0.28px]">
              Password
            </label>

            <div className="relative">
              <input
                className="justify-between w-[424px] h-[48px] text-[#DCD9D9] border border-[#DCD9D9] rounded-sm pr-2  px-2 text-sm font-normal tracking-[0.28px]"
                type="password"
              />
              <span className="absolute right-2 top-3 text-lightBg  font-bold tracking-[0.28px]">
                show
              </span>
            </div>

            <Link
              href="#"
              className="block w-full text-right text-base font-bold"
            >
              I forgot My Password
            </Link>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center justify-center w-full h-12 bg-lightBg text-foreground text-base font-bold border rounded-sm cursor-pointer"
          >
            Login
          </Link>
          <div className="flex justify-center items-center">
            <span className="text-base fontsemibold tracking-[0.64px]">
              Not Ali Riaz?
            </span>
            <Link
              href="#"
              className="text-lightBg text-base font-bold tracking-[0.64px] "
            >
              Singup To Continue
            </Link>
          </div>
        </form>
      </section>
      <section className="flex flex-col w-[730px]">
        <div>
          <Image src="/star.png" alt="star rating" width={100} height={100} />
          <p>
            “I’ve been using Uifry for over a year, and it’s helped simplify all
            my payments.”
          </p>
          <span>Ali Riaz</span>
          <span>singapore</span>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Login;
