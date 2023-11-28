import ChartsPage from "@/components/charts";
import LoginPage from "@/components/login/LoginPage";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(false)

  const handlelogin = (data) => {
    setUser(true);
  }
  const handlelogout = (data) => {
    setUser(false)
  }

  return (
    <div className='fixed top-0 w-full' id="root">
      {!user ? <LoginPage handlelogin={handlelogin} /> :
        <ChartsPage handlelogout={handlelogout} />}
    </div>
  )
}