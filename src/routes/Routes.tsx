import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import QuizPage from "../pages/QuizPage/QuizPage";
import InfoPage from "../pages/InfoPage/InfoPage";
import GuessNumberPage from "../pages/GamePage/GuessNumberPage";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {path: "", element: <HomePage/>},
                {path: "quiz", element: <QuizPage/>},
                {path: "info", element: <InfoPage/>},
                {path: "game", element: <GuessNumberPage/>},
            ]
        }
    ]
)