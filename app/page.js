import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  // console.log(user)
  return (
    <div className="">

     {/* <Chat/> */}
      
    </div>
  );
}
