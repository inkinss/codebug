import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarProfile = () => {
  return (
    <Avatar className="size-10">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarProfile;
