"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function CreditSuisseNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Fixed Login/Register Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden mb-0">
        <Link
          href="/login"
          className="flex-1 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-primary-600 dark:text-primary-400 font-semibold shadow-lg border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors text-center"
        >
          <i className="fa-solid fa-sign-in-alt mr-2"></i>
          Login
        </Link>
        <Link
          href="/signup"
          className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg transition-colors text-center"
        >
          <i className="fa-solid fa-user-plus mr-2"></i>
          Register
        </Link>
      </div>

      {/* Navigation Header */}
      <nav className="relative bg-gradient-to-r from-white via-primary-50 to-white dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 backdrop-blur-xl border-b border-gradient-to-r from-transparent via-primary-200/50 to-transparent dark:border-primary-700/30 sticky top-0 z-50 shadow-lg shadow-primary-500/5">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -top-5 right-1/4 w-16 h-16 bg-teal-200/20 dark:bg-teal-800/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-400/20 rounded-xl blur-lg group-hover:bg-primary-400/30 transition-all duration-300"></div>
                <Link href="/">
                  <Image
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2Vu ZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy41LjAsIFNWRyBFeHBvcnQgUGx1 Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVy c2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3Jn LzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94 bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxOTguNDMgNTAu NTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5OC40MyA1MC41 NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3Nz Ij4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOiM0NTQ2NEU7fQ0KPC9z dHlsZT4NCjxnPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDQuNTIs MzcuNDZoNC45OGMwLjMsMCwwLjYsMC4wNSwwLjkxLDAuMTRjMC4zMSwwLjA5LDAu NTksMC4yNSwwLjg0LDAuNDhjMC4yNSwwLjIyLDAuNDYsMC41MiwwLjYyLDAuODkN CgkJCWMwLjE2LDAuMzcsMC4yNCwwLjgyLDAuMjQsMS4zNmMwLDAuNDktMC4wOCww LjkxLTAuMjQsMS4yN2MtMC4xNiwwLjM2LTAuMzcsMC42Ni0wLjYzLDAuODljLTAu MjYsMC4yMy0wLjU1LDAuNDEtMC44OCwwLjUyDQoJCQljLTAuMzMsMC4xMS0wLjY1 LDAuMTctMC45NywwLjE3aC0zLjU2djQuMjZoLTEuMzJWMzcuNDZ6IE00NS44NCw0 Mi4wM2gzLjA1YzAuNTcsMCwxLjAzLTAuMTMsMS4zOC0wLjQNCgkJCWMwLjM1LTAu MjcsMC41Mi0wLjcsMC41Mi0xLjMxYzAtMC41Ni0wLjEzLTAuOTgtMC40LTEuMjdj LTAuMjctMC4yOS0wLjcxLTAuNDMtMS4zMi0wLjQzaC0zLjIzVjQyLjAzeiIvPg0K CQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTcuMTUsNDIuODNjMC0wLjQ4LTAuMTIt MC44Mi0wLjM1LTEuMDRjLTAuMjMtMC4yMS0wLjY0LTAuMzItMS4yMi0wLjMyYy0w Ljg3LDAtMS4zMywwLjQ2LTEuMzcsMS4zNw0KCQkJbC0xLjE1LTAuMDdjMC4wNy0w Ljc2LDAuMzMtMS4zMSwwLjc2LTEuNjdjMC40My0wLjM1LDEuMDItMC41MywxLjc3 LTAuNTNjMC4yOCwwLDAuNTgsMC4wMywwLjksMC4wOA0KCQkJYzAuMzIsMC4wNSww LjYxLDAuMTUsMC44NywwLjNjMC4yNywwLjE1LDAuNDksMC4zNiwwLjY3LDAuNjNj MC4xOCwwLjI3LDAuMjcsMC42MywwLjI3LDEuMDZ2My4xMWMwLDAuMzMsMC4wNSww LjUzLDAuMTUsMC42Mg0KCQkJYzAuMSwwLjA5LDAuMjEsMC4xMywwLjM0LDAuMTNj MC4xMSwwLDAuMjMtMC4wMiwwLjM1LTAuMDd2MC45NWMtMC4xMSwwLjAzLTAuMjMs MC4wNS0wLjM1LDAuMDdjLTAuMTIsMC4wMi0wLjI0LDAuMDMtMC4zNiwwLjAzDQoJ CQljLTAuMzUsMC0wLjYxLTAuMDctMC43OC0wLjIyYy0wLjE4LTAuMTUtMC4zLTAu MzgtMC4zOC0wLjdjLTAuNjMsMC42OS0xLjQyLDEuMDQtMi4zOCwxLjA0Yy0wLjMs MC0wLjU4LTAuMDUtMC44NC0wLjE0DQoJCQljLTAuMjYtMC4wOS0wLjQ5LTAuMjIt MC42OC0wLjM5Yy0wLjE5LTAuMTctMC4zNC0wLjM2LTAuNDYtMC41OWMtMC4xMS0w LjIyLTAuMTctMC40Ny0wLjE3LTAuNzNjMC0wLjQ2LDAuMS0wLjgzLDAuMy0xLjEy DQoJCQljMC4yLTAuMjksMC40OS0wLjUyLDAuODctMC42OWMwLjM4LTAuMTcsMC44 NC0wLjI5LDEuMzktMC4zNmMwLjU1LTAuMDcsMS4xNi0wLjEzLDEuODUtMC4xN1Y0 Mi44M3ogTTU3LjE1LDQ0LjE3DQoJCQljLTAuNDcsMC4wNy0wLjksMC4xMy0xLjI5 LDAuMmMtMC4zOSwwLjA3LTAuNzMsMC4xNi0xLjAxLDAuMjdjLTAuMjgsMC4xMS0w LjUsMC4yNC0wLjY1LDAuNDFjLTAuMTUsMC4xNi0wLjIzLDAuMzgtMC4yMywwLjY0 DQoJCQljMCwwLjIxLDAuMDQsMC4zNywwLjEzLDAuNWMwLjA4LDAuMTMsMC4xOSww LjI0LDAuMzIsMC4zMWMwLjEzLDAuMDgsMC4yNiwwLjEzLDAuNDEsMC4xNmMwLjE1 LDAuMDMsMC4yOSwwLjA0LDAuNDMsMC4wNA0KCQkJYzAuNTQsMCwwLjk5LTAuMTUs MS4zNS0wLjQ2YzAuMzYtMC4zMSwwLjU0LTAuNzQsMC41NC0xLjNWNDQuMTd6Ii8+ DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02MC4yMyw0MC43NGgxLjE1djEuMTVo MC4wM2MwLjI3LTAuNDYsMC41OS0wLjc4LDAuOTUtMC45NmMwLjM2LTAuMTgsMC44 NC0wLjI3LDEuNDEtMC4yN3YxLjI2DQoJCQljLTAuMTEtMC4wMS0wLjI0LTAuMDIt MC4zOS0wLjAyYy0wLjE1LDAtMC4yOC0wLjAxLTAuMzgtMC4wMWMtMC4yOCwwLTAu NTIsMC4wNi0wLjcyLDAuMTdjLTAuMiwwLjEyLTAuMzcsMC4yNi0wLjUsMC40Mw0K CQkJYy0wLjE0LDAuMTctMC4yNCwwLjM2LTAuMywwLjU3Yy0wLjA3LDAuMjEtMC4x LDAuNDEtMC4xLDAuNjF2My43NWgtMS4xNVY0MC43NHoiLz4NCgkJPHBhdGggY2xh c3M9InN0MSIgZD0iTTY0LjExLDQwLjc0aDEuMTF2LTIuMDloMS4xNXYyLjA5aDEu MjV2MC45OGgtMS4yNXY0LjI2YzAsMC4xNiwwLjAyLDAuMzEsMC4wNiwwLjQ0DQoJ CQljMC4wNCwwLjE0LDAuMTcsMC4yLDAuNDEsMC4yYzAuMTMsMCwwLjI1LTAuMDEs MC4zNi0wLjAzczAuMjMtMC4wNiwwLjM1LTAuMXYwLjk4Yy0wLjE5LDAuMDUtMC4z OCwwLjA4LTAuNTcsMC4xDQoJCQljLTAuMTksMC4wMi0wLjM4LDAuMDQtMC41Nyww LjA0Yy0wLjMsMC0wLjUzLTAuMDMtMC42OS0wLjFjLTAuMTYtMC4wNy0wLjI4LTAu MTYtMC4zNS0wLjI3Yy0wLjA4LTAuMTItMC4xMi0wLjI2LTAuMTMtMC40Mg0KCQkJ Yy0wLjAxLTAuMTYtMC4wMi0wLjM0LTAuMDItMC41MnYtNC41NmgtMS4xMVY0MC43 NHoiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcyLjI3LDQ0LjA5YzAtMC41 LDAuMDctMC45NywwLjIyLTEuNGMwLjE1LTAuNDMsMC4zNi0wLjgsMC42NC0xLjEx YzAuMjgtMC4zMSwwLjYyLTAuNTYsMS4wMy0wLjczDQoJCQljMC40MS0wLjE4LDAu ODctMC4yNywxLjM4LTAuMjdjMC41MSwwLDAuOTcsMC4wOSwxLjM4LDAuMjdjMC40 MSwwLjE4LDAuNzUsMC40MiwxLjAzLDAuNzNjMC4yOCwwLjMxLDAuNDksMC42OCww LjY0LDEuMTENCgkJCWMwLjE1LDAuNDMsMC4yMiwwLjksMC4yMiwxLjRjMCwwLjUt MC4wNywwLjk3LTAuMjIsMS40Yy0wLjE1LDAuNDMtMC4zNiwwLjgtMC42NCwxLjEx Yy0wLjI4LDAuMzEtMC42MiwwLjU2LTEuMDMsMC43Mw0KCQkJYy0wLjQxLDAuMTgt MC44NywwLjI3LTEuMzgsMC4yN2MtMC41MSwwLTAuOTctMC4wOS0xLjM4LTAuMjdj LTAuNDEtMC4xOC0wLjc1LTAuNDItMS4wMy0wLjczYy0wLjI4LTAuMzEtMC40OS0w LjY4LTAuNjQtMS4xMQ0KCQkJQzcyLjM0LDQ1LjA2LDcyLjI3LDQ0LjU5LDcyLjI3 LDQ0LjA5eiBNNzMuNSw0NC4wOWMwLDAuMjgsMC4wMywwLjU3LDAuMDgsMC44OHMw LjE2LDAuNTksMC4zMSwwLjg1DQoJCQljMC4xNSwwLjI2LDAuMzYsMC40OCwwLjYz LDAuNjRjMC4yNywwLjE3LDAuNiwwLjI1LDEuMDIsMC4yNWMwLjQxLDAsMC43NS0w LjA4LDEuMDItMC4yNWMwLjI3LTAuMTcsMC40OC0wLjM4LDAuNjMtMC42NA0KCQkJ YzAuMTUtMC4yNiwwLjI2LTAuNTQsMC4zMi0wLjg1czAuMDgtMC42LDAuMDgtMC44 OGMwLTAuMjgtMC4wMy0wLjU3LTAuMDgtMC44OGMtMC4wNi0wLjMtMC4xNi0wLjU5 LTAuMzItMC44NQ0KCQkJYy0wLjE1LTAuMjYtMC4zNi0wLjQ4LTAuNjMtMC42NGMt MC4yNy0wLjE3LTAuNi0wLjI1LTEuMDItMC4yNWMtMC40MSwwLTAuNzUsMC4wOC0x LjAyLDAuMjVjLTAuMjcsMC4xNy0wLjQ4LDAuMzgtMC42MywwLjY0DQoJCQljLTAu MTUsMC4yNi0wLjI2LDAuNTQtMC4zMSwwLjg1QzczLjUzLDQzLjUxLDczLjUsNDMu ODEsNzMuNSw0NC4wOXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTgwLjUs NDEuNzJINzkuNHYtMC45OGgxLjExdi0xLjE5YzAtMC43NCwwLjE1LTEuMjcsMC40 NS0xLjZjMC4zLTAuMzMsMC43Ny0wLjQ5LDEuNDEtMC40OQ0KCQkJYzAuMTMsMCww LjI2LDAuMDEsMC4zOCwwLjAzYzAuMTIsMC4wMiwwLjI0LDAuMDQsMC4zNSwwLjA2 djAuODdjLTAuMDktMC4wMi0wLjE5LTAuMDMtMC4yOC0wLjA0Yy0wLjA5LTAuMDEt MC4yMS0wLjAxLTAuMzUtMC4wMQ0KCQkJYy0wLjA5LDAtMC4xOSwwLjAxLTAuMjgs MC4wM2MtMC4wOSwwLjAyLTAuMTgsMC4wNi0wLjI2LDAuMTNjLTAuMDgsMC4wNy0w LjE0LDAuMTYtMC4yLDAuMjljLTAuMDUsMC4xMy0wLjA4LDAuMjktMC4wOCwwLjV2 MS40NA0KCQkJaDEuMjV2MC45OGgtMS4yNXY1LjcxSDgwLjVWNDEuNzJ6Ii8+DQoJ CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05NS42Niw0NC4xNmMwLDAuNTctMC4wOSwx LjA3LTAuMjcsMS41MWMtMC4xOCwwLjQ0LTAuNDMsMC44MS0wLjc2LDEuMTFzLTAu NzIsMC41Mi0xLjE5LDAuNjgNCgkJCWMtMC40NywwLjE1LTAuOTksMC4yMy0xLjU4 LDAuMjNjLTAuNTksMC0xLjEyLTAuMDgtMS41OC0wLjIzYy0wLjQ3LTAuMTUtMC44 Ni0wLjM4LTEuMTktMC42OHMtMC41OC0wLjY3LTAuNzYtMS4xMQ0KCQkJYy0wLjE4 LTAuNDQtMC4yNy0wLjk0LTAuMjctMS41MXYtNi42OWgxLjMydjYuNDdjMCwwLjg4 LDAuMiwxLjUzLDAuNTksMS45NmMwLjM5LDAuNDMsMS4wMiwwLjY0LDEuODksMC42 NA0KCQkJYzAuODcsMCwxLjUtMC4yMSwxLjg5LTAuNjRjMC4zOS0wLjQzLDAuNTkt MS4wOCwwLjU5LTEuOTZ2LTYuNDdoMS4zMlY0NC4xNnoiLz4NCgkJPHBhdGggY2xh c3M9InN0MSIgZD0iTTk3LjY1LDM3LjQ2aDQuNjZjMC42MSwwLDEuMTEsMC4wOCwx LjUyLDAuMjRzMC43MywwLjM2LDAuOTcsMC42MWMwLjI0LDAuMjUsMC40MiwwLjUz LDAuNTIsMC44Mw0KCQkJYzAuMSwwLjMxLDAuMTUsMC42MSwwLjE1LDAuOTFjMCww LjUxLTAuMTQsMC45Ni0wLjQxLDEuMzRjLTAuMjgsMC4zOC0wLjYyLDAuNjMtMS4w NCwwLjc2djAuMDNjMC42MiwwLjE1LDEuMDYsMC40NSwxLjM0LDAuOTINCgkJCXMw LjQxLDEsMC40MSwxLjYyYzAsMC4xOS0wLjAzLDAuNDMtMC4xLDAuNzRjLTAuMDcs MC4zMS0wLjIsMC42MS0wLjQxLDAuOWMtMC4yMSwwLjI5LTAuNTIsMC41NS0wLjky LDAuNzYNCgkJCWMtMC40LDAuMjEtMC45MywwLjMyLTEuNiwwLjMyaC01LjFWMzcu NDZ6IE05OC45Nyw0MS42OWgzLjA0YzAuMjcsMCwwLjUzLTAuMDIsMC43OC0wLjA2 YzAuMjUtMC4wNCwwLjQ2LTAuMTIsMC42NS0wLjI0DQoJCQljMC4xOS0wLjEyLDAu MzQtMC4yOCwwLjQ1LTAuNDhjMC4xMS0wLjIxLDAuMTctMC40NywwLjE3LTAuOGMw LTAuMzctMC4wNi0wLjY2LTAuMTgtMC44N2MtMC4xMi0wLjIxLTAuMjgtMC4zNS0w LjQ4LTAuNDUNCgkJCXMtMC40Mi0wLjE1LTAuNjYtMC4xNmMtMC4yNC0wLjAxLTAu NDktMC4wMi0wLjc0LTAuMDJoLTMuMDJWNDEuNjl6IE05OC45Nyw0Ni4yOGgzLjU0 YzAuNTMsMCwwLjk3LTAuMTMsMS4zMi0wLjM5DQoJCQljMC4zNS0wLjI2LDAuNTIt MC42NywwLjUyLTEuMjNjMC0wLjQzLTAuMDctMC43Ny0wLjItMS4wMmMtMC4xNC0w LjI1LTAuMzEtMC40My0wLjUzLTAuNTVjLTAuMjItMC4xMi0wLjQ2LTAuMTktMC43 NC0wLjIyDQoJCQljLTAuMjgtMC4wMy0wLjU2LTAuMDQtMC44NC0wLjA0aC0zLjA3 VjQ2LjI4eiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTEzLjUsNDAuMzlj LTAuMDItMC4zNi0wLjEtMC42OC0wLjI0LTAuOTVjLTAuMTQtMC4yNy0wLjMzLTAu NDktMC41Ni0wLjY2Yy0wLjIzLTAuMTctMC41LTAuMy0wLjgtMC4zOA0KCQkJYy0w LjMtMC4wOC0wLjYzLTAuMTMtMC45Ny0wLjEzYy0wLjIzLDAtMC40OCwwLjAyLTAu NzQsMC4wN2MtMC4yNiwwLjA1LTAuNSwwLjEzLTAuNzIsMC4yNGMtMC4yMiwwLjEx LTAuNCwwLjI3LTAuNTQsMC40Ng0KCQkJYy0wLjE0LDAuMi0wLjIyLDAuNDQtMC4y MiwwLjczYzAsMC4zMywwLjA5LDAuNTksMC4yNywwLjc5YzAuMTgsMC4yLDAuNDIs MC4zNiwwLjcxLDAuNDljMC4yOSwwLjEzLDAuNjMsMC4yMywxLjAyLDAuMzENCgkJ CXMwLjc3LDAuMTYsMS4xNiwwLjI1YzAuMzksMC4wOSwwLjc4LDAuMiwxLjE2LDAu MzJjMC4zOCwwLjEzLDAuNzIsMC4zLDEuMDIsMC41MmMwLjI5LDAuMjIsMC41Myww LjUsMC43MSwwLjg0DQoJCQljMC4xOCwwLjM0LDAuMjcsMC43NywwLjI3LDEuM2Mw LDAuNTMtMC4xMSwwLjk5LTAuMzQsMS4zOGMtMC4yMiwwLjM5LTAuNTIsMC43MS0w Ljg3LDAuOTZjLTAuMzYsMC4yNS0wLjc3LDAuNDQtMS4yMiwwLjU3DQoJCQljLTAu NDYsMC4xMy0wLjkyLDAuMTktMS40LDAuMTljLTAuNTksMC0xLjE0LTAuMDYtMS42 Ni0wLjE5Yy0wLjUyLTAuMTMtMC45Ny0wLjMzLTEuMzctMC42Yy0wLjM5LTAuMjgt MC43MS0wLjYzLTAuOTYtMS4wOA0KCQkJcy0wLjM5LTAuOTgtMC40My0xLjYybDEu NDMtMC4xM2MwLjA0LDAuOTEsMC4zMiwxLjU2LDAuODQsMS45NWMwLjUyLDAuNCwx LjIyLDAuNTksMi4wOSwwLjU5YzAuMzIsMCwwLjYyLTAuMDQsMC45Mi0wLjExDQoJ CQljMC4yOS0wLjA3LDAuNTYtMC4xOSwwLjc4LTAuMzVjMC4yMy0wLjE2LDAuNDEt MC4zNiwwLjU1LTAuNjJjMC4xNC0wLjI1LDAuMjEtMC41NiwwLjIxLTAuOTFjMC0w LjM1LTAuMDktMC42Mi0wLjI3LTAuODMNCgkJCWMtMC4xOC0wLjIxLTAuNDItMC4z OC0wLjcxLTAuNTJjLTAuMjktMC4xNC0wLjYzLTAuMjQtMS4wMi0wLjMzYy0wLjM4 LTAuMDgtMC43Ny0wLjE3LTEuMTYtMC4yNWMtMC4zOS0wLjA4LTAuNzgtMC4xOC0x LjE2LTAuMjkNCgkJCWMtMC4zOC0wLjExLTAuNzItMC4yNy0xLjAyLTAuNDZjLTAu MjktMC4yLTAuNTMtMC40NC0wLjcxLTAuNzRjLTAuMTgtMC4zLTAuMjctMC42OC0w LjI3LTEuMTVjMC0wLjQ5LDAuMS0wLjkxLDAuMzEtMS4yNg0KCQkJYzAuMjEtMC4z NSwwLjQ5LTAuNjUsMC44My0wLjg4YzAuMzQtMC4yMywwLjcyLTAuNDEsMS4xNS0w LjUyYzAuNDItMC4xMiwwLjg1LTAuMTcsMS4yOC0wLjE3YzAuNTEsMCwxLDAuMDYs MS40NiwwLjE4DQoJCQljMC40NiwwLjEyLDAuODYsMC4zMSwxLjIyLDAuNTZjMC4z NSwwLjI1LDAuNjUsMC41NywwLjg4LDAuOTdjMC4yMywwLjM5LDAuMzksMC44Niww LjQ2LDEuNEwxMTMuNSw0MC4zOXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0i TTEyOC43Myw0Ni4wNWgtMC4wM2MtMC40MiwwLjYzLTAuOTQsMS4wNS0xLjU2LDEu MjljLTAuNjIsMC4yMy0xLjI4LDAuMzUtMS45OCwwLjM1DQoJCQljLTAuNzcsMC0x LjQ3LTAuMTMtMi4wOS0wLjM4Yy0wLjYyLTAuMjUtMS4xNS0wLjYxLTEuNTgtMS4w N3MtMC43Ni0xLjAyLTAuOTktMS42NnMtMC4zNC0xLjM1LTAuMzQtMi4xMw0KCQkJ YzAtMC42NCwwLjExLTEuMjgsMC4zMy0xLjljMC4yMi0wLjYzLDAuNTQtMS4xOSww Ljk3LTEuNjhjMC40My0wLjQ5LDAuOTUtMC44OSwxLjU3LTEuMmMwLjYyLTAuMywx LjMzLTAuNDUsMi4xMy0wLjQ1DQoJCQljMC41MywwLDEuMDQsMC4wNiwxLjUzLDAu MTljMC40OCwwLjEzLDAuOTMsMC4zMSwxLjM0LDAuNTZjMC40MSwwLjI1LDAuNzYs MC41NSwxLjA4LDAuOTJjMC4zMSwwLjM2LDAuNTYsMC43OSwwLjc0LDEuMjcNCgkJ CWwtMS4zMiwwLjM1Yy0wLjExLTAuMzItMC4yNi0wLjYxLTAuNDUtMC44N2MtMC4x OS0wLjI2LTAuNDEtMC40OS0wLjY5LTAuNjdjLTAuMjctMC4xOS0wLjU5LTAuMzMt MC45Ni0wLjQ0DQoJCQljLTAuMzctMC4xMS0wLjc5LTAuMTYtMS4yNy0wLjE2Yy0w LjU2LDAtMS4wNiwwLjExLTEuNSwwLjMzYy0wLjQ0LDAuMjItMC44MiwwLjUxLTEu MTMsMC44OGMtMC4zMSwwLjM2LTAuNTQsMC43OS0wLjcxLDEuMjcNCgkJCXMtMC4y NSwwLjk5LTAuMjUsMS41M2MwLDAuNTUsMC4wNywxLjA4LDAuMjEsMS41OGMwLjE0 LDAuNSwwLjM2LDAuOTUsMC42NSwxLjMzYzAuMjksMC4zOCwwLjY3LDAuNjksMS4x MiwwLjkyDQoJCQljMC40NSwwLjIzLDAuOTksMC4zNCwxLjYsMC4zNGMwLjUyLDAs MS0wLjA3LDEuNDMtMC4yYzAuNDMtMC4xNCwwLjgxLTAuMzQsMS4xMi0wLjZjMC4z MS0wLjI3LDAuNTUtMC42LDAuNzMtMQ0KCQkJYzAuMTctMC40LDAuMjYtMC44Nyww LjI2LTEuNGgtMy40M3YtMS4xNWg0LjYydjUuMzNoLTEuMTZWNDYuMDV6Ii8+DQoJ CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMzEuNzcsNDAuNzRoMS4xNXYxLjE1aDAu MDNjMC4yNy0wLjQ2LDAuNTktMC43OCwwLjk1LTAuOTZjMC4zNi0wLjE4LDAuODQt MC4yNywxLjQxLTAuMjd2MS4yNg0KCQkJYy0wLjExLTAuMDEtMC4yNC0wLjAyLTAu MzktMC4wMmMtMC4xNSwwLTAuMjgtMC4wMS0wLjM4LTAuMDFjLTAuMjgsMC0wLjUy LDAuMDYtMC43MiwwLjE3Yy0wLjIsMC4xMi0wLjM3LDAuMjYtMC41LDAuNDMNCgkJ CWMtMC4xNCwwLjE3LTAuMjQsMC4zNi0wLjMsMC41N2MtMC4wNywwLjIxLTAuMSww LjQxLTAuMSwwLjYxdjMuNzVoLTEuMTVWNDAuNzR6Ii8+DQoJCTxwYXRoIGNsYXNz PSJzdDEiIGQ9Ik0xMzYuMDIsNDQuMDljMC0wLjUsMC4wNy0wLjk3LDAuMjItMS40 YzAuMTUtMC40MywwLjM2LTAuOCwwLjY0LTEuMTFjMC4yOC0wLjMxLDAuNjItMC41 NiwxLjAzLTAuNzMNCgkJCWMwLjQxLTAuMTgsMC44Ny0wLjI3LDEuMzgtMC4yN2Mw LjUxLDAsMC45NywwLjA5LDEuMzgsMC4yN2MwLjQxLDAuMTgsMC43NSwwLjQyLDEu MDMsMC43M2MwLjI4LDAuMzEsMC40OSwwLjY4LDAuNjQsMS4xMQ0KCQkJYzAuMTUs MC40MywwLjIyLDAuOSwwLjIyLDEuNGMwLDAuNS0wLjA3LDAuOTctMC4yMiwxLjRj LTAuMTUsMC40My0wLjM2LDAuOC0wLjY0LDEuMTFjLTAuMjgsMC4zMS0wLjYyLDAu NTYtMS4wMywwLjczDQoJCQljLTAuNDEsMC4xOC0wLjg3LDAuMjctMS4zOCwwLjI3 Yy0wLjUxLDAtMC45Ny0wLjA5LTEuMzgtMC4yN2MtMC40MS0wLjE4LTAuNzUtMC40 Mi0xLjAzLTAuNzNzLTAuNDktMC42OC0wLjY0LTEuMTENCgkJCUMxMzYuMSw0NS4w NiwxMzYuMDIsNDQuNTksMTM2LjAyLDQ0LjA5eiBNMTM3LjI2LDQ0LjA5YzAsMC4y OCwwLjAzLDAuNTcsMC4wOCwwLjg4YzAuMDYsMC4zLDAuMTYsMC41OSwwLjMyLDAu ODUNCgkJCWMwLjE1LDAuMjYsMC4zNiwwLjQ4LDAuNjMsMC42NGMwLjI3LDAuMTcs MC42LDAuMjUsMS4wMiwwLjI1YzAuNDEsMCwwLjc1LTAuMDgsMS4wMS0wLjI1YzAu MjctMC4xNywwLjQ4LTAuMzgsMC42My0wLjY0DQoJCQljMC4xNS0wLjI2LDAuMjYt MC41NCwwLjMyLTAuODVjMC4wNi0wLjMsMC4wOC0wLjYsMC4wOC0wLjg4YzAtMC4y OC0wLjAzLTAuNTctMC4wOC0wLjg4Yy0wLjA2LTAuMy0wLjE2LTAuNTktMC4zMi0w Ljg1DQoJCQljLTAuMTUtMC4yNi0wLjM2LTAuNDgtMC42My0wLjY0Yy0wLjI3LTAu MTctMC42LTAuMjUtMS4wMS0wLjI1Yy0wLjQxLDAtMC43NSwwLjA4LTEuMDIsMC4y NWMtMC4yNywwLjE3LTAuNDgsMC4zOC0wLjYzLDAuNjQNCgkJCWMtMC4xNSwwLjI2 LTAuMjYsMC41NC0wLjMyLDAuODVDMTM3LjI5LDQzLjUxLDEzNy4yNiw0My44MSwx MzcuMjYsNDQuMDl6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDkuNDQs NDcuNDNoLTEuMTV2LTAuOWgtMC4wM2MtMC4yMiwwLjM0LTAuNDksMC42LTAuODEs MC43OGMtMC4zMywwLjE5LTAuNzEsMC4yOC0xLjE1LDAuMjgNCgkJCWMtMC4zNCww LTAuNjUtMC4wNC0wLjk0LTAuMTJjLTAuMjktMC4wOC0wLjU0LTAuMjEtMC43NS0w LjQxYy0wLjIxLTAuMTktMC4zOC0wLjQ0LTAuNS0wLjc2Yy0wLjEyLTAuMzEtMC4x OC0wLjctMC4xOC0xLjE3di00LjQxDQoJCQloMS4xNXY0LjQxYzAsMC40OCwwLjEz LDAuODMsMC4zOSwxLjA1YzAuMjYsMC4yMiwwLjYsMC4zNCwxLjAyLDAuMzRjMC41 MywwLDAuOTYtMC4xNiwxLjI5LTAuNDhjMC4zMy0wLjMyLDAuNS0wLjc1LDAuNS0x LjI5DQoJCQl2LTQuMDNoMS4xNVY0Ny40M3oiLz4NCgkJPHBhdGggY2xhc3M9InN0 MSIgZD0iTTE1MS4yLDQwLjc0aDEuMTV2MC44aDAuMDFjMC4xOS0wLjI1LDAuNDct MC40OCwwLjg1LTAuNjdjMC4zOC0wLjIsMC44MS0wLjI5LDEuMjktMC4yOQ0KCQkJ YzAuNTksMCwxLjA5LDAuMSwxLjUsMC4yOWMwLjQxLDAuMiwwLjc0LDAuNDYsMC45 OSwwLjc5YzAuMjUsMC4zMywwLjQzLDAuNzEsMC41NSwxLjEzYzAuMTEsMC40Miww LjE3LDAuODUsMC4xNywxLjMNCgkJCWMwLDAuNDUtMC4wNiwwLjg4LTAuMTgsMS4z Yy0wLjEyLDAuNDItMC4zLDAuOC0wLjU2LDEuMTNjLTAuMjYsMC4zMy0wLjU5LDAu Ni0wLjk5LDAuNzljLTAuNDEsMC4yLTAuODksMC4yOS0xLjQ2LDAuMjkNCgkJCWMt MC40NSwwLTAuODYtMC4wOC0xLjIzLTAuMjVjLTAuMzctMC4xNy0wLjY3LTAuNDIt MC45Mi0wLjc2aC0wLjAzdjMuOThoLTEuMTVWNDAuNzR6IE0xNTYuNDgsNDQuMDlj MC0wLjM0LTAuMDQtMC42Ni0wLjEyLTAuOTYNCgkJCXMtMC4yLTAuNTctMC4zNy0w LjhjLTAuMTctMC4yMy0wLjM4LTAuNDItMC42NC0wLjU2Yy0wLjI2LTAuMTQtMC41 OC0wLjIxLTAuOTUtMC4yMWMtMC4zNywwLTAuNjksMC4wNy0wLjk1LDAuMjENCgkJ CWMtMC4yNiwwLjE0LTAuNDgsMC4zMy0wLjY0LDAuNTZjLTAuMTcsMC4yMy0wLjI5 LDAuNS0wLjM3LDAuOGMtMC4wOCwwLjMtMC4xMiwwLjYyLTAuMTIsMC45NmMwLDAu MzQsMC4wNSwwLjY2LDAuMTQsMC45Ng0KCQkJYzAuMDksMC4zLDAuMjMsMC41Nyww LjQxLDAuODFjMC4xOCwwLjIzLDAuMzksMC40MiwwLjY1LDAuNTZjMC4yNiwwLjE0 LDAuNTUsMC4yMSwwLjg5LDAuMjFjMC4zNywwLDAuNjktMC4wNywwLjk1LTAuMjEN CgkJCWMwLjI2LTAuMTQsMC40OC0wLjMzLDAuNjQtMC41NmMwLjE3LTAuMjMsMC4y OS0wLjUsMC4zNy0wLjgxQzE1Ni40NCw0NC43NCwxNTYuNDgsNDQuNDIsMTU2LjQ4 LDQ0LjA5eiIvPg0KCTwvZz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAuOSw4 LjNoLTUuNjN2MC40NmMwLjIyLDAuMTUsMC41NiwwLjQ5LDAuNTYsMS41M3YxNS4w Mmg1LjA3YzYuNDMsMCw5LjgtNC4zNyw5LjgtOC42OQ0KCQlDNjAuNzEsMTIuNDIs NTcuNTMsOC4zLDUwLjksOC4zeiBNNTAuMzIsMjMuNzNjLTAuNTgsMC0xLjA5LTAu MDUtMS43Mi0wLjE1VjkuOWMwLjIyLTAuMDIsMC43NS0wLjA1LDEuMjYtMC4wNQ0K CQljNS41NiwwLDcuNzQsMi45MSw3Ljc0LDYuODJDNTcuNiwyMS4yMyw1NC42Nywy My43Myw1MC4zMiwyMy43M3ogTTI5LjI0LDIyLjk1bC0yLjQ1LTQuMjJjLTAuNDQt MC43Ni0wLjg3LTEuMy0xLjgyLTEuNjcNCgkJYzIuOTItMC41Niw0LjAzLTIuNDgs NC4wMy00LjQ0YzAtMi4yNi0xLjQ2LTQuMzItNi4xMS00LjMyaC01LjM0djAuNDZj MC4yMiwwLjE1LDAuNTYsMC40OSwwLjU2LDEuNTN2MTUuMDJoMi43N3YtNy43Mmgw LjkyDQoJCWMxLjE2LDAsMS41NSwwLjYxLDIuNDMsMi4xMWwyLjE4LDMuNzljMC42 NiwxLjE0LDIuMDQsMS44MiwzLjc5LDEuODJoMS40NmwwLjA3LTAuNTZDMzAuNjIs MjQuNDYsMjkuOCwyMy45LDI5LjI0LDIyLjk1eg0KCQkgTTIyLjQ0LDE2LjA2aC0x LjU4VjkuOTJjMC4zNi0wLjAyLDEuMjktMC4wNSwxLjctMC4wNWMyLjA5LDAsMy40 NywwLjkyLDMuNDcsMi45NkMyNi4wMywxNC44NSwyNC42OCwxNi4wNiwyMi40NCwx Ni4wNnoNCgkJIE0xNS4yMSwyMC4xNGwwLjQxLDAuMTJsLTAuMzIsMy41NGMtMS44 NywxLjE5LTMuOTMsMS43NS02LjExLDEuNzVjLTYuMDQsMC05LjItNC4yOS05LjIt OC43NmMwLTQuNTksMy4zLTguNzMsOS4xMi04LjczDQoJCWMyLjI4LDAsNC4yNSww LjYzLDYuMTEsMS41bDAuMjIsMy42NmwtMC4zOSwwLjEybC0wLjA3LTAuMTVjLTEu MTktMi4zOC0zLjEzLTMuNzYtNS40OC0zLjc2Yy0zLjI4LDAtNi40MSwyLjY5LTYu NDEsNy4zDQoJCWMwLDQuNjYsMy4yMyw3LjQyLDYuNDgsNy40MmMyLjI4LDAsNC4x Ny0xLjM2LDUuNDgtMy43NkwxNS4yMSwyMC4xNHogTTYyLjI0LDguM2gzLjMydjE3 LjAxaC0yLjc3VjEwLjI5DQoJCWMwLTEuMDQtMC4zNC0xLjM4LTAuNTYtMS41M1Y4 LjN6IE00My4yOSwyMi4xM2wwLjQxLDAuMTVsLTAuNywzLjAzaC05LjQ0VjEwLjI5 YzAtMS4wNC0wLjM0LTEuMzgtMC41Ni0xLjUzVjguM2g5LjUxbDAuMDcsMy4wMQ0K CQloLTAuNDFsLTAuMDUtMC4xMmMtMC4yNy0wLjY2LTAuODItMS4zMS0xLjk0LTEu MzFoLTMuODZ2NS4zMWg0Ljh2MS41M2gtNC44djYuODdjMC42MywwLjA3LDEuOCww LjE1LDIuODksMC4xNQ0KCQljMy4xMywwLDMuNTItMC42MSwzLjk4LTEuNDNMNDMu MjksMjIuMTN6IE0xMTMuNzcsOC4zaDAuMDV2MTEuMzNjMCwzLjkzLTIuNSw1Ljky LTUuOTcsNS45MmMtMy41NCwwLTYuMTQtMi4wNi02LjE0LTYuMjh2LTguOTgNCgkJ YzAtMS4wNC0wLjM0LTEuMzgtMC41Ni0xLjUzVjguM2gzLjMydjEwLjk3YzAsMy4x MywxLjUzLDQuNzEsMy45NSw0LjcxYzIuMDYsMCwzLjU5LTEuNjMsMy41OS00LjE3 di05LjUxDQoJCWMwLTEuMDQtMC4zNC0xLjM4LTAuNTYtMS41M1Y4LjNIMTEzLjc3 eiBNMTQ1LjE0LDIwLjM4YzAsMi42NC0xLjk3LDUuMTctNS40MSw1LjE3Yy0xLjg3 LDAtMy42Ni0wLjczLTQuNzgtMS43NWwtMC4zMi0zLjU0DQoJCWwwLjQ2LTAuMTVs MC4xNywwLjM5YzEuMDQsMi4zOCwyLjc0LDMuNjQsNC40NCwzLjY0YzEuNjUsMCwy Ljk4LTEuMjQsMi45OC0yLjkxYzAtMS4yMS0wLjc1LTIuMTgtMS45Ny0yLjg2bC0y Ljg2LTEuNg0KCQljLTEuMDctMC41OC0yLjg5LTEuOC0yLjg5LTQuMDVjMC0yLjUs MS45Ny00LjY2LDUuMTQtNC42NmMxLjM2LDAsMi42NywwLjM5LDMuODgsMS4xOWww LjE5LDMuMTFsLTAuMzksMC4xMmwtMC4xNS0wLjI5DQoJCWMtMC41OC0xLjE2LTEu NTUtMi43NC0zLjQ3LTIuNzRjLTEuNjMsMC0yLjg2LDEuMTQtMi44NiwyLjU1YzAs MS4xNiwwLjksMS44MiwyLjA5LDIuNDdsMi45MSwxLjYNCgkJQzE0NC4zNywxNy4x OCwxNDUuMTQsMTguNzEsMTQ1LjE0LDIwLjM4eiBNMTU3LjMsMjIuMTNsMC40MSww LjE1bC0wLjcsMy4wM2gtOS40NFYxMC4yOWMwLTEuMDQtMC4zNC0xLjM4LTAuNTYt MS41M1Y4LjNoOS41MQ0KCQlsMC4wNywzLjAxaC0wLjQxbC0wLjA1LTAuMTJjLTAu MjctMC42Ni0wLjgyLTEuMzEtMS45NC0xLjMxaC0zLjg2djUuMzFoNC44djEuNTNo LTQuOHY2Ljg3YzAuNjMsMC4wNywxLjgsMC4xNSwyLjg5LDAuMTUNCgkJYzMuMTMs MCwzLjUyLTAuNjEsMy45OC0xLjQzTDE1Ny4zLDIyLjEzeiBNMTk4LjQzLDIxLjMz YzAsMC4xLTAuMDcsMC4xOS0wLjE5LDAuMTljLTAuMDcsMC0wLjE5LTAuMDItMC42 OC0wLjE1DQoJCWMtMi42Mi0wLjY4LTQuMTctMS4wNC03LjU5LTEuNjVjLTMuNjIt My4xNS02LjU4LTUuMzktOS45Ny03Ljg5YzAuNDEsMi4yNiwwLjYzLDQuNTEsMC42 Niw3LjA2YzAsMC4zOSwwLjEyLDAuNTEsMC40OSwwLjQ5DQoJCWMwLjY4LTAuMDcs MS42Ny0wLjEyLDIuNzQtMC4xMmMxLjk3LDAsNC4xLDAuMTUsNi4wOSwwLjQ2YzIu NTUsMi4zLDQuOSw0LjU5LDYuNTgsNi4zOGMwLjA1LDAuMDUsMC4wNywwLjEyLDAu MDcsMC4xNw0KCQljMCwwLjEtMC4wNywwLjE5LTAuMTksMC4xOWMtMC4wNywwLTAu MTktMC4wMi0wLjY4LTAuMTVjLTUuMzEtMS40My0xMC4wOS0xLjg3LTEzLjktMS44 N2MtMy43NiwwLTYuNTUsMC40NC04LjEzLDAuNzMNCgkJYy0wLjM0LDAuMDctMC40 MS0wLjA1LTAuNDktMC4zNmMtMi4yMy05LjktNi44Ny0xOC44OC0xMi4zMy0yMy43 NWMtMC4wNy0wLjA3LTAuMS0wLjE1LTAuMS0wLjE5YzAtMC4xMiwwLjEtMC4yNCww LjI0LTAuMjQNCgkJYzAuMDUsMCwwLjEyLDAuMDIsMC4xNywwLjA1YzUuOTcsMi45 NCwxMS45MSw2LjQ4LDE4Ljc2LDExLjExYy0wLjk3LTQuNTktMi42Mi04LjQyLTQu OTMtMTEuMzhjLTAuMDUtMC4wNy0wLjA3LTAuMTItMC4wNy0wLjE5DQoJCWMwLTAu MTIsMC4xLTAuMjIsMC4yMi0wLjIyYzAuMDUsMCwwLjE1LDAuMDIsMC4yOSwwLjEy YzguNDIsNS43NywxNS41NSwxMS42LDIyLjg4LDIxLjA0QzE5OC40LDIxLjIxLDE5 OC40MywyMS4yOCwxOTguNDMsMjEuMzN6DQoJCSBNOTkuNjUsMjAuMzhjMCwyLjY0 LTEuOTcsNS4xNy01LjQxLDUuMTdjLTEuODcsMC0zLjY2LTAuNzMtNC43OC0xLjc1 bC0wLjMyLTMuNTRsMC40Ni0wLjE1bDAuMTcsMC4zOQ0KCQljMS4wNCwyLjM4LDIu NzQsMy42NCw0LjQ0LDMuNjRjMS42NSwwLDIuOTgtMS4yNCwyLjk4LTIuOTFjMC0x LjIxLTAuNzUtMi4xOC0xLjk3LTIuODZsLTIuODYtMS42Yy0xLjA3LTAuNTgtMi44 OS0xLjgtMi44OS00LjA1DQoJCWMwLTIuNSwxLjk3LTQuNjYsNS4xNC00LjY2YzEu MzYsMCwyLjY3LDAuMzksMy44OCwxLjE5bDAuMTksMy4xMWwtMC4zOSwwLjEybC0w LjE1LTAuMjljLTAuNTgtMS4xNi0xLjU1LTIuNzQtMy40Ny0yLjc0DQoJCWMtMS42 MywwLTIuODYsMS4xNC0yLjg2LDIuNTVjMCwxLjE2LDAuOSwxLjgyLDIuMDksMi40 N2wyLjkxLDEuNkM5OC44NywxNy4xOCw5OS42NSwxOC43MSw5OS42NSwyMC4zOHog TTgxLjA2LDguM2wwLjA3LDMuMDENCgkJaC0wLjQxbC0wLjA1LTAuMTJjLTAuMjct MC42Ni0wLjgyLTEuMzEtMS45NC0xLjMxaC0yLjg5djE1LjQzaC0yLjc3VjkuODho LTIuODljLTEuMTIsMC0xLjY3LDAuNjYtMS45NCwxLjMxbC0wLjA1LDAuMTJoLTAu NDENCgkJbDAuMDctMy4wMUg4MS4wNnogTTEzMi45NiwyMC4zOGMwLDIuNjQtMS45 Nyw1LjE3LTUuNDEsNS4xN2MtMS44NywwLTMuNjYtMC43My00Ljc4LTEuNzVsLTAu MzItMy41NGwwLjQ2LTAuMTVsMC4xNywwLjM5DQoJCWMxLjA0LDIuMzgsMi43NCwz LjY0LDQuNDQsMy42NGMxLjY1LDAsMi45OC0xLjI0LDIuOTgtMi45MWMwLTEuMjEt MC43NS0yLjE4LTEuOTctMi44NmwtMi44Ni0xLjZjLTEuMDctMC41OC0yLjg5LTEu OC0yLjg5LTQuMDUNCgkJYzAtMi41LDEuOTctNC42Niw1LjE0LTQuNjZjMS4zNiww LDIuNjcsMC4zOSwzLjg4LDEuMTlsMC4xOSwzLjExbC0wLjM5LDAuMTJsLTAuMTUt MC4yOWMtMC41OC0xLjE2LTEuNTUtMi43NC0zLjQ3LTIuNzQNCgkJYy0xLjYzLDAt Mi44NiwxLjE0LTIuODYsMi41NWMwLDEuMTYsMC45LDEuODIsMi4wOSwyLjQ3bDIu OTEsMS42QzEzMi4xOSwxNy4xOCwxMzIuOTYsMTguNzEsMTMyLjk2LDIwLjM4eiBN MTE2LjU2LDguM2gzLjMydjE3LjAxDQoJCWgtMi43N1YxMC4yOWMwLTEuMDQtMC4z NC0xLjM4LTAuNTYtMS41M1Y4LjN6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
                    alt="Credit Suisse Bank"
                    width={120}
                    height={40}
                    className="relative h-10 lg:h-10 w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/")
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <span className="relative z-10">Home</span>
                <div className={`absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl transition-transform duration-300 origin-center ${
                  isActive("/") ? "scale-100" : "scale-0 group-hover:scale-100"
                }`}></div>
              </Link>
              <Link
                href="/about"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/about")
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <span className="relative z-10">About</span>
                <div className={`absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl transition-transform duration-300 origin-center ${
                  isActive("/about") ? "scale-100" : "scale-0 group-hover:scale-100"
                }`}></div>
              </Link>
              <div className="relative group">
                <button className={`relative px-4 py-2 font-medium transition-all duration-300 flex items-center ${
                  isActive("/services")
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}>
                  <span className="relative z-10">Services</span>
                  <i className="fa-solid fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform duration-300"></i>
                  <div className={`absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl transition-transform duration-300 origin-center ${
                    isActive("/services") ? "scale-100" : "scale-0 group-hover:scale-100"
                  }`}></div>
                </button>
                {/* Services Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <Link
                      href="/chart"
                      className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300"
                    >
                      <i className="fa-solid fa-user mr-3 text-primary-500"></i>
                      Personal Banking
                    </Link>
                    <Link
                      href="/alerts"
                      className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300"
                    >
                      <i className="fa-solid fa-briefcase mr-3 text-blue-500"></i>
                      Business Banking
                    </Link>
                    <Link
                      href="/send-money"
                      className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300"
                    >
                      <i className="fa-solid fa-handshake mr-3 text-green-500"></i>
                      Loans & Credit
                    </Link>
                    <Link
                      href="/dashboard/cards"
                      className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300"
                    >
                      <i className="fa-solid fa-credit-card mr-3 text-purple-500"></i>
                      Cards
                    </Link>
                    <Link
                      href="/grants"
                      className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300"
                    >
                      <i className="fa-solid fa-hand-holding-dollar mr-3 text-orange-500"></i>
                      Grants & Aid
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/contact")
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <div className={`absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl transition-transform duration-300 origin-center ${
                  isActive("/contact") ? "scale-100" : "scale-0 group-hover:scale-100"
                }`}></div>
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                {mounted && theme === "dark" ? (
                  <i className="fa-solid fa-sun text-lg group-hover:rotate-180 transition-transform duration-500"></i>
                ) : (
                  <i className="fa-solid fa-moon text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                )}
              </button>

              {/* Login Button */}
              <Link
                href="/login"
                className="relative px-4 py-2.5 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-all duration-300 group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              {/* Open Account Button */}
              <Link
                href="/signup"
                className="relative px-6 py-2.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-700 hover:via-primary-600 hover:to-primary-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <i className="fa-solid fa-sparkles mr-2 group-hover:animate-spin"></i>
                  Open Account
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {mobileMenuOpen ? (
                <i className="fa-solid fa-times text-lg transition-transform duration-300"></i>
              ) : (
                <i className="fa-solid fa-bars text-lg transition-transform duration-300"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-white via-primary-50 to-white dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 backdrop-blur-xl border-t border-primary-200/70 dark:border-primary-700/50 shadow-2xl shadow-primary-500/20">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-teal-200/20 dark:bg-teal-800/20 rounded-full blur-xl"></div>
            </div>

            <div className="relative px-6 py-6 space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group ${
                  isActive("/")
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <i className="fa-solid fa-home mr-4 text-primary-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>Home</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group ${
                  isActive("/about")
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <i className="fa-solid fa-info-circle mr-4 text-teal-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>About</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>

              {/* Services Submenu */}
              <div className="space-y-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center w-full px-4 py-3 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group ${
                    isActive("/services")
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  <i className="fa-solid fa-cogs mr-4 text-purple-500 group-hover:scale-110 transition-transform duration-300"></i>
                  <span>Services</span>
                  <i
                    className={`fa-solid fa-chevron-down ml-auto text-xs transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  ></i>
                </button>
                {servicesOpen && (
                  <div className="ml-8 space-y-1">
                    <Link
                      href="/chart"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30"
                    >
                      <i className="fa-solid fa-user mr-3 text-primary-400"></i>
                      Personal Banking
                    </Link>
                    <Link
                      href="/alerts"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30"
                    >
                      <i className="fa-solid fa-briefcase mr-3 text-blue-400"></i>
                      Business Banking
                    </Link>
                    <Link
                      href="/send-money"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30"
                    >
                      <i className="fa-solid fa-handshake mr-3 text-green-400"></i>
                      Loans & Credit
                    </Link>
                    <Link
                      href="/dashboard/cards"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30"
                    >
                      <i className="fa-solid fa-credit-card mr-3 text-purple-400"></i>
                      Cards
                    </Link>
                    <Link
                      href="/grants"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30"
                    >
                      <i className="fa-solid fa-hand-holding-dollar mr-3 text-orange-400"></i>
                      Grants & Aid
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group ${
                  isActive("/contact")
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <i className="fa-solid fa-envelope mr-4 text-orange-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>Contact</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>

              {/* Dark Mode Toggle for Mobile */}
              <div className="pt-4 mt-4 border-t border-primary-700/50">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group"
                >
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {mounted && theme === "dark" ? (
                      <i className="fa-solid fa-sun text-white text-sm group-hover:rotate-180 transition-transform duration-500"></i>
                    ) : (
                      <i className="fa-solid fa-moon text-white text-sm group-hover:rotate-12 transition-transform duration-300"></i>
                    )}
                  </div>
                  <span>{mounted && theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
                  <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

