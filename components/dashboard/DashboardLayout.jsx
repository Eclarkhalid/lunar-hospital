import DashboardHeader from "./DashboardHeader";


const DashboardLayout = ({ children }) => {

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardHeader  />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-48">
          {children}
        </div>
    </div>
  );
};

export default DashboardLayout;
