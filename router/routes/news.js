import { lazy } from 'react'

const NewsList = lazy(() => import('../../pages/news/newsList'))
const BuildNews = lazy(() => import('../../pages/news/buildNews'))
const CategoriesList = lazy(() => import('../../pages/news/CategoriesList'))


const news = [
  {
    element: <NewsList />,
    path: '/newsList'
  },
  {
    element: <BuildNews />,
    path: '/buildNews'
  },
  {
    element: <CategoriesList />,
    path: '/CategoriesList'
  }
]

export default news