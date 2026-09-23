"use client";

import Anchor from "./components/Anchor";
import CMDK from "../cmdk/CMDK";
import InputSearch from "./components/InputSearch";
import AvatarProfile from "../avatar/Avatar";
import { useSession } from "@/lib/auth-client";
import LoginButton from "../auth/components/LoginButton";

const NavBar = () => {
  const session = useSession();

  return (
    <div className="py-5 flex justify-between">
      <section className="flex gap-6 items-center">
        <Anchor />
        <InputSearch />
        <CMDK />
      </section>
      {session.data?.user ? <AvatarProfile /> : <LoginButton />}
    </div>
  );
};

export default NavBar;
