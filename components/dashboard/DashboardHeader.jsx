import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import {
  Activity,
  BriefcaseMedical,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Pill,
  Search,
  Settings,
  ShoppingCart,
  Tablets,
  Truck,
  Users2,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '/components/ui/tooltip';

const DashboardHeader = () => {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-48 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col gap-4 px-2 sm:py-5">
          <Link
            href="/dashboard"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard' ? 'bg-gray-200' : ''
            }`}
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/patients"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard/patients' ? 'bg-gray-200' : ''
            }`}
          >
            <Tablets className="h-4 w-4 transition-all group-hover:scale-110" />
            Patients
          </Link>
          <Link
            href="/dashboard/doctors"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard/doctors' ? 'bg-gray-200' : ''
            }`}
          >
            <BriefcaseMedical className="h-4 w-4 transition-all group-hover:scale-110" />
            Doctors
          </Link>
          <Link
            href="/dashboard/chemist"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard/chemist' ? 'bg-gray-200' : ''
            }`}
          >
            <Activity  className="h-4 w-4 transition-all group-hover:scale-110" />
            Chemist
          </Link>
          <Link
            href="/dashboard/medicines"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard/medicines' ? 'bg-gray-200' : ''
            }`}
          >
            <Pill  className="h-4 w-4 transition-all group-hover:scale-110" />
            Medicines
          </Link>
          <Link
            href="/dashboard/payments"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard/payments' ? 'bg-gray-200' : ''
            }`}
          >
            <CircleDollarSign   className="h-4 w-4 transition-all group-hover:scale-110" />
            Payments
          </Link>
          {/* Add more links here */}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
            href="/dashboard/chat"
            className={`group flex shrink-0 items-center justify-center gap-2 rounded-sm border text-lg font-semibold md:text-base p-4 ${
              router.pathname === '/dashboard/chat' ? 'bg-gray-200' : ''
            }`}
          >
            <BriefcaseMedical  className="h-4 w-4 transition-all group-hover:scale-110" />
            AI Doctor
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default DashboardHeader;
