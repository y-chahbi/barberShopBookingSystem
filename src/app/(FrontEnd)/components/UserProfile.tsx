// components/UserProfile.tsx
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../../store/userSlice";
import { RootState } from "../../store/index";

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user.id ? (
        <>
          <h2>Welcome, {user.firstName}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default UserProfile;
