import React from "react";
import { useThemeContext } from "./contexts/themeContext";
import { MemoizedHeader } from "./components/Header";
import { MemoizedItemList } from "./components/ItemList";
import { MemoizedComplexForm } from "./components/ComplexForm";
import { MemoizedNotificationSystem } from "./components/NotificationSystem";
import { UserProvider } from "./contexts/userContextProvider";
import { NotificationProvider } from "./contexts/notificationContextProvider";
import { ThemeProvider } from "./contexts/themeContextProvider";

const MainContent = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
    >
      <NotificationProvider>
        <UserProvider>
          <MemoizedHeader />
        </UserProvider>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:pr-4">
              <MemoizedItemList />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <MemoizedComplexForm />
            </div>
          </div>
        </div>
        <MemoizedNotificationSystem />
      </NotificationProvider>
    </div>
  );
};

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
