import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
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
  const [ques, setQues] = useState([{
    title: '',
    desc: ''
  }])

  const Gethome = async () => {
    fetch("/homeget").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setQues(jsonRes));
  }

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
    Gethome();
  });

  return (
    <>
      <div className="h1">
        <h1>Welcome {!userData ? "on my website..." : userData.username}</h1>
      </div>

      <div className="main">
        {
          ques.map(ques =>
            <div className="box">
              <img className="img" src={photo1} alt="" />
              <div className="text">
                <span><Link to="/thread">{ques.title}</Link></span>
                <span>{ques.desc}</span>
              </div>
              <div className="btnhomeclass">
                <Link className="btnhome" to="/thread">
                  View More
                </Link>
              </div>
            </div>
          )
        }
        {/* <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="img" src={photo1} alt="" />
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat ratione, velit ducimus cumque dolor nihil asperiores id
            aperiam similique ab unde repudiandae deleniti debitis repellat
            laboriosam perspiciatis vel eligendi? Facere accusamus iure quia ad!
          </div>
          <div className="btnhomeclass">
            <Link className="btnhome" to="/thread">
              View More
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}
