import { useSelector } from "react-redux";

const useCheckUserAndLoggedIn = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const userType = currentUser?.type;
  const isFreelancerAndLoggedIn =
    isLoggedIn && userType && userType !== "client";
  const isClientAndLoggedIn = isLoggedIn && userType && userType === "client";
  return {
    currentUser,
    isLoggedIn,
    userType,
    isFreelancerAndLoggedIn,
    isClientAndLoggedIn,
  };
};

export default useCheckUserAndLoggedIn;
