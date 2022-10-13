import React, { useEffect, useState, useContext } from "react";
import photo1 from "../img/11.jpg";
// import photo2 from "../img/22.jpg";
// import photo3 from "../img/33.jpg";
// import photo4 from "../img/44.jpg";
// import photo5 from "../img/55.jpg";
// import photo6 from "../img/66.jpg";
import { UserContext } from "../App";

export default function Home() {
  const { dispatch } = useContext(UserContext);
  const [userData, setuserData] = useState("");

  const callProfilePage = async () => {
    try {
      const res = await fetch("/userdata", [
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          credentials: "include",
        },
      ]);

      const data = await res.json();
      setuserData(data);
      dispatch({ type: "USER", payload: true });

      if (!res.status === 401) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callProfilePage();
  });

  return (
    <>
      <div className="h1">
        <h1>Welcome {!userData ? "on my website..." : userData.username}</h1>
      </div>
      {/* <div className="main">
      <div className="box">
        <img className='img' src={photo1} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo2} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo3} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo4} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo5} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo6} alt="" />
      </div>
    </div> */}
      <div className="main">
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
          
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat ratione, velit ducimus cumque dolor nihil asperiores id aperiam similique ab unde repudiandae deleniti debitis repellat laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!</div>
        </div>
      </div>
    </>
  );
}
