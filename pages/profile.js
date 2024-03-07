import { useState } from "react";
import { useUser } from "../lib/hooks";
import Layout from "../components/layout";
import Router from "next/router";

// https://stackoverflow.com/questions/61749345/add-button-inside-input-field-reactjs this useful

const Profile = () => {
  const user = useUser({ redirectTo: "/login" });
  const [profile, setProfile] = useState("");
  

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user.profile)
    console.log(e.target.value)

     const body = {
      username: user.username,
      password: user.hash,
      profile: profile
    };

    
    try {
      const res = await fetch("/api/addprofile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/profile");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
    }
  }

  function getUsername(user) {
    if (user !== null)
    { 
      if (user != undefined) {
        console.log("Username: " + user.username);
        return user.username;  
      }
    }
    return "The Unknown"
    
  }

  function getProfile(user) {
    if (user !== null)
    {
      if (user != undefined) {
        console.log("Profile: " + user.profile);
        return user.profile;
      }
    }
    return ""
    
  }





  return (
    <Layout>
      <h1>Profile</h1>

      <p> Hello {getUsername(user)}. You can add some information to your profile if you want </p>

      <p> Your current profile information is </p>
      <p> {getProfile(user)} </p>
      
    
      <div class='inputWithButton'>
        <p> Change your profile? </p>
        <form>
          <input type="text" value={profile} onChange={(e) => setProfile(e.target.value)}/>
          <button onClick={handleSubmit}> Update </button>
        </form>
      </div>

    

      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}



      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .inputWithButton {
          position: relative;
          height: 100px;
          width : 200px;
        }
        
        .inputWithButton input{
            width: 70%;
            height: 25px;
            padding-right: 60px;
        }
        
        .inputWithButton button {
          position: absolute;
          right: 0;
          top : 5px;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;
