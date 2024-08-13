import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// React-cookies
import { CookiesProvider, useCookies } from "react-cookie";

// Routes
import Home from "@/pages";
import Login from "@/pages/Auth/Login.tsx";
import Register from "@/pages/Auth/Register.tsx";
import QuestionPage from "@/pages/SingleQuestion/QuestionPage.tsx";
import AskQuestionPage from "@/pages/AskQuestion/AskQuestionPage.tsx";
import useFetch from "@/hooks/useFetch.ts";
import { useEffect } from "react";
import { Provider } from "react-redux";

// Redux
import { store } from "@/rdx/store.ts";
import { setUserData } from "@/rdx/slices/userSlice.ts";
import ProtectedRoute from "@/utils/ProtectedRoute.tsx";
import UsersRanking from "@/pages/Ranking/UsersRanking.tsx";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user: any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + 604800 * 1000);
    setCookie("user", user, { path: "/", expires });
  }

  const { data } = useFetch<any>("/me");

  useEffect(() => {
    store.dispatch(setUserData(data?.data));
  }, [data]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route
          path="/auth/login"
          element={
            <ProtectedRoute>
              <Login onLogin={handleLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route
          path="/add-question"
          element={
            <ProtectedRoute>
              <AskQuestionPage />
            </ProtectedRoute>
          }
        />
        <Route path="/ranking" element={<UsersRanking />} />
      </Route>,
    ),
  );

  return (
    <Provider store={store}>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </Provider>
  );
}

export default App;
