import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);
      try {
        const response = fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortController.signal
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        return responseData;
      } catch (err) {
        setErrorState(err.message);
      }
      setIsLoading(false);
    },
    []
  );

  const clearError = () => {
    setErrorState(null);
  };

  return { isLoading, errorState, sendRequest, clearError };
};