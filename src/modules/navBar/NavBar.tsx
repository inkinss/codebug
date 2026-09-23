import Anchor from "./components/Anchor";
import CMDK from "../cmdk/CMDK";
import InputSearch from "./components/InputSearch";
import AvatarProfile from "../avatar/Avatar";

const NavBar = () => {
  return (
    <div className="py-5 flex justify-between">
      <section className="flex gap-6 items-center">
        <Anchor />
        <InputSearch />
        <CMDK />
      </section>
      <AvatarProfile />
    </div>
  );
};

export default NavBar;
