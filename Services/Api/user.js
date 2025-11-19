import http from "../interceptor";

export const getProfile = async () => {
  try {
    const response = await http.get(`/SharePanel/GetProfileInfo`);
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error.response.ErrorMessage);
  }
};

export const updateProfileInfo = async (formData) => {
  const formDataToSend = new FormData();
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });

  const response = await http.put(
    `/SharePanel/UpdateProfileInfo`,
    formDataToSend,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};


// export const AddProfileImage = async () => {
//   try {
//     const response = await http.post(`/SharePanel/AddProfileImage`);

//     return response;
//   } catch (error) {
//     console.error(error.response.ErrorMessage);
//   }
// };

export const AddProfileImage = async (formData) => {
  try {
    const response = await http.post(`/SharePanel/AddProfileImage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // اینجا مشخص کردیم که فایل ارسال می‌شود
      },
    });
    return response;
  } catch (error) {
    console.error("Error in AddProfileImage API:", error.response?.data || error.message);
    throw error;
  }
};

export const SelectProfileImage = async (formData) => {
  try {
    const response = await http.post(`/SharePanel/SelectProfileImage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // اینجا مشخص کردیم که فایل ارسال می‌شود
      },
    });
    console.log("API Response:", response);
    return response;
  } catch (error) {
    console.error("Error in SelectProfileImage API:", error.response?.data || error.message);
    throw error;
  }
};

export const DeleteProfileImage = async (formData) => {
  try {
    const response = await http.delete(`/SharePanel/DeleteProfileImage`, {
      data: formData, // ارسال داده‌ها در بدنه درخواست
      headers: {
        "Content-Type": "multipart/form-data", // این مشخص می‌کند که داده‌ها شامل فایل هستند
      },
    });
    console.log("API Response:", response);
    return response;
  } catch (error) {
    console.error("Error in DeleteProfileImage API:", error.response || error.message);
    throw error;
  }
};


export const GetMyCourses = async () => {
  try {
    const response = await http.get(`/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`);
    return response.listOfMyCourses;
  } catch (error) {
    console.error(error.response.ErrorMessage);
  }
};

export const GetMyFavoriteCourses = async () => {
  try {
    const response = await http.get(`/SharePanel/GetMyFavoriteCourses`);
    return response;
  } catch (error) {
    console.error(error.response.ErrorMessage);
  }
};

export const GetMyFavoriteNews = async () => {
  try {
    const response = await http.get(`/SharePanel/GetMyFavoriteNews`);
    return response;
  } catch (error) {
    console.error(error.response.ErrorMessage);
  }
};

export const GetMyCoursesReserve = async () => {
  try {
    const response = await http.get(`/SharePanel/GetMyCoursesReserve`);
    return response;
  } catch (error) {
    console.error(error.response.ErrorMessage);
  }
};