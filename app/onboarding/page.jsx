import TempForm from "@/components/TempForm";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link"

const Page = async () => {

const session = await getSession();
const user = session?.user;

// console.log(user)
  return (
    <div>
      <TempForm/>
        <Link href={`/user/${user.nickname}`}> click</Link>
    </div>
  )
}

export default Page