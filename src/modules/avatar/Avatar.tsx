import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/lib/auth-client";

const AvatarProfile = () => {
  const { data: session } = useSession();

  return (
    <Avatar className="size-10">
      <AvatarImage
        src={session?.user?.image || "https://github.com/shadcn.png"}
      />
      <AvatarFallback>CN</AvatarFallback>
       <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  );
};

export default AvatarProfile;
