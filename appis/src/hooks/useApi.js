import { useEffect, useState } from 'react'

const useApi = (url) => {
    const [posts, setPosts] = useState([])


    const resApi = async () => {
        try {
            const res = await fetch(url)
                .then(res => res.json())
            // =  const data = await res.json()
            setPosts(res)
        } catch (err) {
            console.log(err)

        } finally {
            console.log('finally')
        }
    }

    useEffect(() => {
        resApi()
    }, [url])

    return posts
}

export default useApi