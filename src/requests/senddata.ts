import axios from "axios";

const sendData = async (data: any, type: string) => {
  try {
    const response = await axios.post(
      `https://web-2eel.onrender.com/api/product/${type}`,
      data
    );
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export default sendData;
