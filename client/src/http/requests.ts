/**
 * requests
 */

export const doGet = async <ResponseType>(url: string, params?: Record<string, unknown>) => {
  //todo parse and add params to request
  console.log("get request params", params)
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    //Parse response into json and type it
    const responseJson: ResponseType = await response.json();
    return responseJson

  } catch (error: unknown) {
    if (error instanceof Error) {
      //throw error for react-query
      throw new Error(error.message)
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const doPost =  async <ResponseType, PayloadType>(url: string, payload: PayloadType) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      //Parse response into json and type it
      const responseJson: ResponseType = await response.json();
      return responseJson
  
    } catch (error: unknown) {
      if (error instanceof Error) {
        //throw error for react-query
        throw new Error(error.message)
      } else {
        throw new Error("An unknown error occurred");
      }
    }
};