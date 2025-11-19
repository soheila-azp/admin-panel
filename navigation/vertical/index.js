
import { Home,User, List, BookOpen ,Edit ,Bookmark} from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "کاربران",
    icon: <User size={20} />,
    navLink: "/second-page",
  },
  {
    id: "smaplePage",
    title: "دوره ها",
    icon: <List size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "invoiceList1",
        title: "لیست دوره ها",
        icon: <BookOpen size={12} />,
        navLink: '/coursesList',
      },
      {
        id: "invoiceList2",
        title: "لیست دوره های شما",
        icon: <List size={12} />,
        navLink: '/yourCourses',
      },
      {
        id: "invoiceList3",
        title: "دوره های رزرو شده کاربران",
        icon: <Bookmark size={12} />,
        navLink: '/reservedCourses',
      },
      {
        id: "invoiceList4",
        title: "ساخت دوره جدید",
        icon: <Edit size={12} />,
        navLink: '/buildCourse',
      },
    ],
  },
  {
    id: "smaplePage2",
    title: "اخبار",
    icon: <List size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "invoiceList5",
        title: "لیست اخبار",
        icon: <List size={12} />,
        navLink: '/newsList',
      },
      {
        id: "invoiceList6",
        title: "ایجاد خبر جدید",
        icon: <List size={12} />,
        navLink: '/buildNews',
      },
      {
        id: "invoiceList7",
        title: "لیست دسته بندی",
        icon: <List size={12} />,
        navLink: '/categoriesList',
      },
    ],
  }
];
