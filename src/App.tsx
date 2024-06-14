import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

// Routes
import Home from "@/pages";
import Login from "@/pages/Auth/Login.tsx";
import Register from "@/pages/Auth/Register.tsx";
import QuestionPage from "@/pages/SingleQuestion/QuestionPage.tsx";
import AskQuestionPage from "@/pages/AddQuestion/AskQuestionPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/questions/:id" element={<QuestionPage/>}/>
            <Route path="/add-question" element={<AskQuestionPage/>}/>
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
