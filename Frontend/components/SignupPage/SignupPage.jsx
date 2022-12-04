const SignupPage = () => {
  return (
    <div className="flex justify-center pt-4">
      <div className="flex-col flex items-center gap-4 max-w-[350px] flex-grow">
        <h2 className="h2 text-Headings">Sign Up</h2>

        <input
          type="text"
          id="Name"
          className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
          placeholder="Enter your Name"
        ></input>

        <input
          type="email"
          id="Email"
          className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
          placeholder="Enter your Email Address"
        ></input>
        <input
          type="password"
          id="Password"
          className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
          placeholder="Enter your Password"
        ></input>

        <button className="rounded-lg bg-RedPrimary w-full p-4">
          <p className="outlinebody text-White">CONTINUE</p>
        </button>
      </div>
    </div>
  );
};

export default SignupPage;