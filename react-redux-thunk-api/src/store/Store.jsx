import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/Users/usersSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
  },
});
