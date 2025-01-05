import Logo from "@/assets/logo.svg";
import Link from "next/link";

export const InfosSidebar = () => {
  return (
    <aside className="size-full p-6 overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <Link href={"/"}>
          <Logo className="w-full max-w-[80px]" />
        </Link>
      </div>
    </aside>
  );
};
