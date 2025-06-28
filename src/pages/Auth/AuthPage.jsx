import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
    
  return (
    <div className="container m-auto w-full h-screen flex items-center justify-center ">
      <div className=" flex flex-col space-y-5 border border-gray-300 rounded-lg p-10 w-1/3">
        <div>
            <Label>Kullanıcı Adı</Label>
             <Input placeholder="Kullanıcı Adı" />
        </div>
        <div>
            <Label>Email</Label>
             <Input placeholder="Email" />
        </div>
        <div>
            <Label>Şifre</Label>
             <Input placeholder="Şifre" />
        </div>

        <Button>Kayıt  Ol</Button>
        
      </div>
    </div>
  );
};

export default AuthPage;
