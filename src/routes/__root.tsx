import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { useAuth } from "../shared/hooks/useAuth";
import { useEffect } from "react";
const activeProps = {
  style: {
    fontWeight: "bold",
  },
};
export const Route = createRootRoute({
  component: () => {
    const { isAuthenticated } = useAuth()

    useEffect(() => {
      if (!isAuthenticated) {
      }
    }, [isAuthenticated])

    return (
      <>
        <h1>My App</h1>
        <ul>
          <li>
            <Link to="/" activeProps={activeProps}>
              {({ isActive }) => <>Login {isActive && "~"}</>}
            </Link>
          </li>
          {isAuthenticated && (
            <li>
            <Link to="/login" activeProps={activeProps}>
              Home
            </Link>
          </li>
          )}
        </ul>
        <Outlet />
      </>
    )
  },
});
