import { UserContext } from "./userContext";

import { useNotificationContext } from "./notificationContext";

import { useState } from "react";
import { User } from "../type";
import { UserContextType } from "./userContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { addNotification } = useNotificationContext();
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  };

  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  };

  const userContextValue: UserContextType = {
    user,
    login,
    logout,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
