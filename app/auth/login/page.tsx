import { LoginForm } from "@/components/auth/login-form";
import { ModeToggle } from "@/components/common/mode-toggle";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <header className="flex items-center justify-between p-4 w-full">
        <div className="w-9 h-9"></div>
        <h1 className="text-2xl font-bold">Inicio de Sesión</h1>
        <ModeToggle />
      </header>
      <main className="flex flex-col items-center p-4 gap-8">
        <Image src={Logo} alt="logo" className="w-20 h-auto" />
        <LoginForm />
      </main>
    </>
  );
}
