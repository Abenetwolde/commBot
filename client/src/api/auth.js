import { useCallback } from "react";
import useParamsApi from "./useParamsAPI";

const useAuth = () => {
  const { post, loading, response } = useParamsApi("http://localhost:4000/api/auth");

  return [
    useCallback(
      (data, setData) => {
        post(data).then((data) => {
          setData(response.ok ? data : null);
        });
      },
      [response, post]
    ),
    loading,
  ];
};

export { useAuth };
