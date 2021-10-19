import { MainNavbar } from "../components";

interface Props {
  navbar?: boolean;
  children?: React.ReactNode;
}

const MainLayout = ({ navbar = true, children }: Props) => {
  return (
    <div>
      {navbar && <MainNavbar></MainNavbar>}
      {children}
    </div>
  );
};

export default MainLayout;
