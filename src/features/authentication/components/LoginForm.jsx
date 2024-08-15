import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateLogin from "../validator/validate-login";
import useAuth from "../../../hooks/useAuth";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      } else {
        await login(input);
        navigate("/");
        toast.success("Login successfully!");
        setInputError({ ...initialInputError });
      }
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "Invalid email or password!"
            : "Internal Server Error!";
        return toast.error(message);
      }
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-4">
        <div>
          <Input
            placeholder="Email"
            name="email"
            value={input.email}
            error={inputError.email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={input.password}
            error={inputError.password}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Button width="full">Log in</Button>
        </div>
      </div>
    </form>
  );
}
