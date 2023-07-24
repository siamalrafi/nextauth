import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

const ProfilePage = () => {
   const { data: session } = useSession();
   return (
      <div style={{ textAlign: "center" }}>
         <Head>
            <title>Next Profile</title>
         </Head>
         <h1>User Profile</h1>

         <h3>{session?.user?.email}</h3>
         <h3>{session?.user?.name}</h3>

         <Avatar size={64} icon={<UserOutlined />} />
      </div>
   );
};

export default ProfilePage;
