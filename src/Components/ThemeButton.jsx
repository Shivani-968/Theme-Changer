import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function ThemeButton() {
  const { user, setUser } = useContext(UserContext);
  const isLight = user.themeMode === "light";

  const OnChangeBtn = (e) => {
    const themeMode = e.target.checked ? "light" : "dark";
    setUser({ ...user, themeMode });
  };

  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-3 rounded-full border px-4 py-2.5 shadow-md transition-all duration-300 ${
        isLight
          ? "border-slate-200 bg-white text-slate-700"
          : "border-slate-700 bg-slate-900 text-slate-200"
      }`}
    >
      {/* Sun / Moon Icon */}
      <span className="text-lg">
        {isLight ? "☀️" : "🌙"}
      </span>

      <span className="text-sm font-semibold">
        {isLight ? "Light Mode" : "Dark Mode"}
      </span>

      {/* Toggle */}
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          onChange={OnChangeBtn}
          checked={isLight}
          aria-label="Toggle theme"
        />

        <div
          className={`h-6 w-11 rounded-full transition-colors duration-300 ${
            isLight ? "bg-blue-500" : "bg-slate-600"
          }`}
        />

        <div
          className={`absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow transition-transform duration-300 ${
            isLight ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
}

export default ThemeButton;