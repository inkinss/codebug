import Link from "next/link";

const Anchor = () => {
  return (
    <Link className="text-slate-800" href={"/"}>
      code<strong>bug</strong>
    </Link>
  );
};

export default Anchor;
