import axios from "axios";

const deleteIds = async (ids: string[]) => {
  console.log(ids)
  try {
      const response = await axios.delete("https://web-2eel.onrender.com/api/deleteProduct", {
      data: ids,
    });
    return response.status
} catch (error) {
    console.log(error);
  }
};

export default deleteIds;
