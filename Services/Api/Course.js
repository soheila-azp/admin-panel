import http from "../interceptor";

export const fetchCourses = async ({ PageNumber,
  RowsOfPage,
  Query,
  CostDown,
  CostUp,
  courseLevelId,
  CourseTypeId,
  TeacherId}) => {
  try {
    const result = await http.get(`/Home/GetCoursesWithPagination?SortingCol=Active&SortType=DESC&TechCount=0`
    ,{params:{ PageNumber,
          RowsOfPage,
          Query,
          CostDown,
          CostUp,
          courseLevelId,
          CourseTypeId,
          TeacherId}});
    console.log("Fetched fetchCourses:", result); // Log the API result
    return result.courseFilterDtos;
  } catch (error) {
    console.error("Error fetching landing products:", error);
    return []; // Return an empty array if there's an error
    
  }
};

export const CourseDetails = async (CourseId) => {
  try {
    const result = await http.get(`/Home/GetCourseDetails`, { params: { CourseId } });
    console.log("Fetched fetchCourses:", result); // Log the API result
    return result;
  } catch (error) {
    console.error("Error fetching landing products:", error);
    return []; // Return an empty array if there's an error
    
  }
};

export const GetCourseCommnets = async (courseId) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${courseId}`);
    console.log("کامنتای کورس", result);
    return result;
  } catch (error) {
    console.error("Error fetching GetCourseCommnets:", error);
    return { error: "Unable to fetch comments." };
  }
};



export const GetCourseReplyCommnets = async (courseId, CommentId) => {
  try {
    const result = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${CommentId}` );
    console.log("جواب کامنتا:", result); // Log the API result
    return result;
  } catch (error) {
    console.error("Error fetching GetCourseReplyCommnets:", error);
    return []; // Return an empty array if there's an error
  }
};

export const GetNewsCommnets = async (NewsId) => {
  try {
    const result = await http.get(`/News/GetNewsComments?NewsId=${NewsId}`);
    console.log("کامنت‌های اخبار:", result);
    return result;
  } catch (error) {
    console.error("Error fetching GetNewsCommnets:", error);
    return { error: "Unable to fetch comments." };
  }
};


export const reserveCourse = async (CourseId) => {
  try {
    const response = await http.post(`/CourseReserve/ReserveAdd`,{CourseId} 
    );
    console.log("Reservation successful:", response);
    return response;
  } catch (error) {
    console.error("Error during reservation:", error.response || error.message);
    throw error; // برای مدیریت خطا در جای دیگر
  }
};

// Fetch Articles
  export const fetchArticles = async (RowsOfPage) => {
    try {
      const result = await http.get(`/News?PageNumber=1&SortingCol=InsertDate&SortType=DESC`,{params:RowsOfPage});
      console.log("Fetched fetchArticles:", result); // Log the API result
      return result.news;
    } catch (error) {
      console.error("Error fetching landing products:", error);
      return []; // Return an empty array if there's an error
      
    }
  };
  export const NewsDetails = async (id) => {
    try {
      const result = await http.get(`/News`, { id });
      console.log("Fetched NewsDetails:", result); // Log the API result
      return result.news;
    } catch (error) {
      console.error("Error fetching landing products:", error);
      return []; // Return an empty array if there's an error
      
    }
  };

// Fetch Teachers
export const fetchTeachers = async () => {
  try {
    const result = await http.get(`/Home/GetTeachers`);
    console.log("Fetched teachers:", result); // Log the API result
    return result;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return []; // Return an empty array if there's an error
  }
};

// Fetch Landing Products
export const fetchLandingProducts = async () => {
  try {
    const result = await http.get(`/Home/GetCoursesTop?Count=4`);
    console.log("Fetched landing products:", result); // Log the API result
    return result;
  } catch (error) {
    console.error("Error fetching landing products:", error);
    return []; // Return an empty array if there's an error
    
  }
};

export const landingReport = async ()=> {
  try {
    const result = await http.get(`/Home/LandingReport`);
    return result;
  } catch (error){
    throw error;
  }
}
