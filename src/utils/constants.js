const getBaseURL = () => {
  const hostname = location.hostname;
  
  if (hostname === "localhost") {
    return "http://localhost:3000";        // Local
  } else if (hostname === "15.206.222.88") {
    return "http://15.206.222.88:3000";   // AWS IP
  } else {
    return "http://15.206.222.88:3000";   // Vercel
  }
};

const BASE_URL = getBaseURL();

export default BASE_URL;