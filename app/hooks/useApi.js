import { useState } from "react"

const useApi = (funcApi) => {

    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request =  async () => {

        setLoading(true);
        const response = await funcApi();
        setLoading(false);

        if (!response.ok) {
            setError(true);
            return response
        }
        // console.log(response)
        setError(false);
        setData(response.data)
        return response
    }

    return { data, error, loading, request }
}

export default useApi