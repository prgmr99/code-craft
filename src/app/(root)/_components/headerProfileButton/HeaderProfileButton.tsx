"use client";

import useMounted from "@/hooks/useMounted";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const HeaderProfileButton = () => {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default HeaderProfileButton;
