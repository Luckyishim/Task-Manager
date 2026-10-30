import { createContext, useState, useEffect } from 'react'
import { API_PATHS } from '../utils/apiPaths'
import axiosInstance from '../utils/axiosInstance'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(() => !!localStorage.getItem("token"))//New state to track loading

    useEffect(() => {
        if (!localStorage.getItem("token")) return
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE)
                setUser(response.data)
            } catch (error) {
                console.error("User not authenticated", error)
                localStorage.removeItem("token")
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    const updateUser = (userData) => {
        setUser(userData)
        if (userData.token) {
            localStorage.setItem("token", userData.token) //Save token
        }
        setLoading(false)
    }

    const clearUser = () => {
        setUser(null)
        localStorage.removeItem("token")
    }

    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider