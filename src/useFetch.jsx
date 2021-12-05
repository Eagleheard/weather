import { useState, useEffect } from 'react'

export const useFetch = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url)
            const data = await response.json()
            setData(data.Search)
            setLoading(false)
        }

        if(url) {
          fetchMovies()
        }
    }, [url])

    return { data, loading }
}