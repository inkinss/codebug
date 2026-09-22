import Anchor from "./components/Anchor";
import CMDK from "../cmdk/CMDK";
import InputSearch from "./components/InputSearch";
import AvatarProfile from "../avatar/Avatar";

const NavBar = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <section className="flex items-center gap-6">
        <Anchor />
        <InputSearch />
        <CMDK />
      </section>
      <AvatarProfile />
    </div>
  );
};

export default NavBar;
