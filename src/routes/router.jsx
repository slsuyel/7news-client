
import { createBrowserRouter } from 'react-router-dom';
import MainLAyouts from '../Layouts/MainLAyouts';
import Home from '../pages/Home/Home';
import NewsDetails from '../pages/news/NewsDetails';
import PostForm from '../pages/Admin/PostForm';
import Categories from '../pages/Categories/Categories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLAyouts />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/news/:id',
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`https://news-server-omega.vercel.app/allnews/${params.id}`)
      },
      {
        path: '/categories/:category',
        element: <Categories />,
        loader: ({ params }) => fetch(`https://news-server-omega.vercel.app/categories/${params.category}`)

      }
    ],
  },
  {
    path: '/123/admin',
    element: <PostForm />
  }
]);

export default router;