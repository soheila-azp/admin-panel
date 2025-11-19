import { list } from "postcss";
import http from "../interceptor";

// export const usersList = async () => {
//   try {
//     const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=10&SortingCol=DESC`);
//     console.log("Fetched fetchCourses:", result.listUser); // Log the API result
//     return result.listUser;
//   } catch (error) {
//     console.error("Error fetching admin courses:", error);
//     return []; // Return an empty array if there's an error
    
//   }
// };

export const usersList = async ({ page, perPage, SortingCol, Query, roleId}) => {
  try {
    const result = await http.get(`/User/UserMannage?PageNumber=${page}&RowsOfPage=${perPage}&SortingCol=${SortingCol}&Query=${Query}&RoleId=${roleId}`);
    console.log("Fetched fetchCourses:", result.listUser); // Log the API result
    return { list: result.listUser,
      total: result.totalCount,
      roles: result.roles
    };
  } catch (error) {
    console.error("Error fetching admin courses:", error);
    return [error]; // Return an empty array if there's an error
  }
};


export const CourseAList = async ({PageNumber,RowsOfPage,Query}) => {
    try {
      const result = await http.get(`/Course/CourseList?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&Query=${Query}`);
      console.log("Fetched fetchCourses:", result.courseDtos); // Log the API result
      return {
       list: result.courseDtos,
        total: result.totalCount
      }
      
     
    } catch (error) {
      console.error("Error fetching admin courses:", error);
      return []; // Return an empty array if there's an error
      
    }
  };
  export const reservedCo = async () => {
    try {
      const result = await http.get(`/CourseReserve`);
      console.log("Fetched reserved Courses:", result); // Log the API result
      return result;
    } catch (error) {
      console.error("Error fetching admin courses:", error);
      return []; // Return an empty array if there's an error
      
    }
  };
  export const getUserDetail = async (UserId) => {
    try {
      const result = await http.get(`/User/UserDetails/${UserId}`);
      console.log("Fetched get Details:", result); // Log the API result
      return result;
    } catch (error) {
      console.error("Error fetching admin courses:", error);
      return []; // Return an empty array if there's an error
      
    }
  };
  

export const createUser = async (userData) => {
  try {
    const response = await http.post(`/User/CreateUser`, userData);
    console.log("User created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; 
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await http.put(`/User/UpdateUser`, userData);
    console.log("User created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; 
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await http.delete(`/User/DeleteUser`, {data: { userId }} );
    console.log("User created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; 
  }
};

export const getCourseDetail = async (id)=>{
  try{
  const response = await http.get(`/Course/${id}`)
  return response;
}
catch(error){
console.log("error getting user details",error);
throw error
}
}

export const getReserves = async (CourseId)=>{
  try{
    const response =await http.get(`/CourseReserve/${CourseId}`)
    return response;
  }
  catch(error){
    throw error
  }
}

export const GetCourseGroup = async(TeacherId,CourseId)=>{
  try{
    const response =await http.get(`/CourseGroup/GetCourseGroup?TeacherId=${TeacherId}&CourseId=${CourseId}`)
    return response;
  }catch(error){
      console.error("Error in GetCourseGroup:", error)
    throw error
  }
}

export const acceptReserve = async(userData)=>{
  try{
    const response=await http.post(`/CourseReserve/SendReserveToCourse`,userData)
    return response
  }
catch(error){
  throw error
}}

export const getNewsList = async ({ PageNumber, RowsOfPage, Query }) => {
  try {
    const result = await http.get(`/News?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&Query=${Query}`);
    console.log("Fetched news list:", result.news); // Log the API result
    return {
      list: result.news,
      total: result.totalCount
    };
  } catch (error) {
    console.error("Error fetching news list:", error);
    return []; // Return an empty array if there's an error
  }
}
export const getCategoryList = async()=>{
  try{
    const result = await http.get(`/News/GetListNewsCategory`);
    console.log("Fetched category list:", result); // Log the API result
    return result;
  }catch(error){
    console.error("Error fetching category list:", error);
    return [];
  }
}