import { Zap } from "lucide-react";
import Link from "next/link";

const CHEKOUT_URL =
  "https://yeomcraft.lemonsqueezy.com/buy/4e8d8224-b358-44f0-aac0-2c2430026af8";

const UpgradeButton = () => {
  return (
    <Link
      href={CHEKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
};

export default UpgradeButton;
