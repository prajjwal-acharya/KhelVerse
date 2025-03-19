'use client';
import { Home, User, Calendar, BarChart, Settings, LogOut, Menu, Salad, HeartPulse, Dumbbell, ChartColumnIncreasing } from "lucide-react"; // ShadCN uses Lucide icons
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/config/slices/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const user = useSelector((state) => state.user, (prev, next) => prev === next);

  const [isOpen, setIsOpen] = useState(true);
  console.log(user)

  const navItems = {
    guest: [
      { name: "Home", path: "/", icon: Home },
    ],
    athlete: [
      { name: "Dashboard", path: "/dashboard/athlete", icon: BarChart },
      { name: "Profile", path: "/dashboard/athlete/profile", icon: User },
      { name: "Diet Plan", path: "/dashboard/athlete/diet", icon: Salad },
      { name: "Injury", path: "/dashboard/athlete/injury", icon: HeartPulse },
      { name: "Training", path: "/dashboard/athlete/training", icon: Dumbbell },
      { name: "Tracking", path: "/dashboard/athlete/performance_evaluation", icon: ChartColumnIncreasing },
      { name: "Events", path: "/events", icon: Calendar },
    ],
    coach: [
      { name: "Dashboard", path: "/dashboard/coach", icon: BarChart },
      { name: "Athlete Profiles", path: "/dashboard/coach/athlete_profiles", icon: User },
      { name: "Events", path: "/events", icon: Calendar },
    ],
    organization: [
      { name: "Dashboard", path: "/dashboard/organization", icon: BarChart },
      { name: "Athlete Management", path: "/dashboard/organization/athlete_management", icon: Settings },
      { name: "Events", path: "/events", icon: Calendar },
    ],
  };

  const activeNav = user ? navItems[user.role] || [] : navItems.guest;

  const handleLogout = async () => {
    dispatch(logoutUser());
    router.push("/");
  };

  return (
    <aside className={`fixed top-0 left-0 h-full ${isOpen ? "w-64" : "w-16"} transition-all bg-[#e8e7e7] text-black pt-[20px] pl-[20px] border-r-[2px] border-white`}>
      {/* Sidebar Toggle */}
      <div className=" flex gap-[5px] items-center justify-between mb-[20px]">
        <h2 className="text-2xl font-sprintura ">APTS</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="p-4">
            <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col space-y-4 pr-[20px]">
        {activeNav.map(({ name, path, icon: Icon }) => (
          <Link key={name} href={path} className="flex items-center space-x-2 py-2 pl-[5px] hover:bg-[#9f87b6a1] rounded">
            <Icon size={20} />
            {isOpen && <span>{name}</span>}
          </Link>
        ))}

        {/* Logout Button */}
        {user && (
          <Button onClick={handleLogout} className="flex items-center space-x-2 p-2 mt-auto hover:bg-red-600 rounded">
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </Button>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
