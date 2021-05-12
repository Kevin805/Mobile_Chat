import { auth } from "../config";

const SignOut = ({ setShowSideBar }) =>
auth.currentUser && (
    <button
        className="logout"
        onClick={() => {
            auth.signOut();
          //  setShowSideBar(false);
        }}
    >
      Signout
    </button>
);

export default SignOut