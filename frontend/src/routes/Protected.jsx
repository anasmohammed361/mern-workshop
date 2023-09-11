import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/api/auth")
      .then((response) => {
        setAuth(Boolean(response.status === 200));
      })
      .catch((e) => {
        console.log(e);
        setAuth(false);
      });
  });

  if (auth) {
    return <div>You are seeing this because you are logged in</div>;
  } else {
    return (
      <>
        <p>You are not auth</p>{" "}
        <button
          onClick={() => {
            navigate("/auth/google");
            window.location.reload();
          }}
        ></button>
      </>
    );
  }
};

export default Protected;
