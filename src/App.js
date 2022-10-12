import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
