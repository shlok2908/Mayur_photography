import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Check if this is a route change (not initial load)
    if (prevPathname.current !== pathname) {
      // Force full page refresh on route change
      window.location.reload();
    } else {
      // For initial load, just scroll to top
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    
    // Update the previous pathname
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
