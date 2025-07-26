import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "@/redux/auth/authSlice";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user,message } = useSelector((state) => state.auth);


  useEffect(() => {
    if (user) {
      toast.success(message)
      navigate("/");
    }
  }, [user]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = () => {
    if (isSignUp) {
      dispatch(register(formData));
    } else {
      dispatch(login(formData));
    }
  };

  return (
    <div className="container m-auto w-full h-screen flex items-center justify-center ">
      <div className=" flex flex-col space-y-5 border border-gray-300 rounded-lg p-10 w-1/3">
        {isSignUp && (
          <div className="flex flex-col space-y-2">
            <Label>Kullanıcı Adı</Label>
            <Input
              onChange={onChangeHandler}
              name="username"
              placeholder="Kullanıcı Adı"
            />
          </div>
        )}
        <div className="flex flex-col space-y-2">
          <Label>Email</Label>
          <Input onChange={onChangeHandler} name="email" placeholder="Email" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label>Şifre</Label>
          <Input
            onChange={onChangeHandler}
            name="password"
            placeholder="Şifre"
          />
        </div>
        <div>
          {isSignUp ? (
            <span className="text-slate-600">
              Daha önce kayıt oldun mu?{" "}
              <b
                onClick={() => setIsSignUp(!isSignUp)}
                className="pl-1 cursor-pointer text-slate-800"
              >
                Giriş Yap
              </b>
            </span>
          ) : (
            <span className="text-slate-600">
              Henüz Hesabın Yok mu?{" "}
              <b
                onClick={() => setIsSignUp(!isSignUp)}
                className="pl-1 cursor-pointer text-slate-800"
              >
                Kayıt Ol
              </b>
            </span>
          )}
        </div>

        {isSignUp ? (
          <Button onClick={formSubmitHandler}>
            {isLoading ? (
              <ImSpinner9 className="animate-spin text-2xl" />
            ) : (
              "Kayıt Ol"
            )}
          </Button>
        ) : (
          <Button onClick={formSubmitHandler}>
            {isLoading ? (
              <ImSpinner9 className="animate-spin text-2xl" />
            ) : (
              "Giriş Yap"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
