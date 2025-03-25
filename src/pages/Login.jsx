import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="h-screen grid place-items-center w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("./login.jpg")`,
      }}
    >
      <div className=" p-8 rounded-lg  max-w-md w-full">
        <img className="w-14 mx-auto mb-4" src="./logo.svg" alt="Logo" />
        <h2 className="text-4xl text-center mb-5 font-bold text-white">
          Login
        </h2>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="email"
              placeholder="email"
              className="input"
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="password"
              className="input"
              required
            />
          </label>
          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            <button className="btn btn-primary grow md:btn-md btn-sm">
              Login
            </button>
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-400">
              Google
            </button>
          </div>
        </div>

        <h2 className="mt-4">
          if you don't have an account, please
          <Link to="/register" className="bg-white underline text-black ml-1">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
