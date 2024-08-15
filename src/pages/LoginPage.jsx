import LoginForm from "../features/authentication/components/LoginForm";
import RegisterContainer from "../features/authentication/components/RegisterContainer";

export default function LoginPage() {
  return (
    <div className="mx-auto mt-32">
      <h2 className="text-center font-bold text-3xl p-4 text-slate-600">
        Welcome to Fakebuck!
      </h2>
      <div className="bg-white mx-auto p-4 rounded-md max-w-sm  shadow-lg">
        <LoginForm />
        <hr className="my-4 border" />
        <RegisterContainer />
      </div>
    </div>
  );
}
