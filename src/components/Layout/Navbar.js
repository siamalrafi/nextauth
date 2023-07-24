import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
   const { data: session } = useSession();

   return (
      <Header
         style={{
            display: "flex",
            justifyContent: "space-between",
         }}
      >
         <div className="demo-logo">
            <Link
               href="/"
               style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "25px",
               }}
            >
               NEXT AUTH
            </Link>
         </div>
         <Menu
            theme="dark"
            mode="horizontal"
            style={{
               width: "20%",
               display: "flex",
               fontSize: "20px",
               justifyContent: "space-between",
            }}
         >
            <items>
               <Button type="primary">
                  <Link style={{ textDecoration: "none", color: "white" }} href="/profile">
                     <items>Profile</items>
                  </Link>
               </Button>
            </items>

            {session?.user ? (
               <items>
                  <Button onClick={() => signOut()} type="primary" danger>
                     <Link style={{ textDecoration: "none", color: "white" }} href="/profile">
                        <items>logout</items>
                     </Link>
                  </Button>
               </items>
            ) : (
               <Link style={{ textDecoration: "none", color: "white" }} href="/login">
                  <items>Login</items>
               </Link>
            )}
         </Menu>
      </Header>
   );
};
export default Navbar;
