import { useCallback, useEffect, useState } from 'react'
import { API_RICK_MORTY } from '../Api'


export const useApi = (enpoint = "") => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState({
        status: false,
        message: ""
    })

    const getData = useCallback(async (enpoint) => {
        try {

            const data = await API_RICK_MORTY.get(`${enpoint}`)
                .then(res => res.data)
            setData(data)
            setLoading(false)
            setErr({
                status: false,
                message: ""
            })
        } catch (e) {

            console.log(e)
            setErr({
                status: true,
                message: e.message
            })

        }
    }, [enpoint])

    useEffect(() => {

        getData(enpoint)

    }, [enpoint, getData])

    return [data, loading, err]
}