import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"
import { API_PATHS } from "../../utils/apiPaths"
import DashboardLayout from "../../components/layouts/DashboardLayout"

const ViewTaskDetails = () => {
  const { id } = useParams()
  const [task, setTask] = useState(null)

  const getStatusTagColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-cyan-50 border border-cyan-500/10"
      case "Completed":
        return "text-lime-500 bg-lime-50 border border-lime-500/20"
      default:
        return "text-violet-500 bg-violet-50 border border-violet-500/10"
    }
  }

  //get Task info by ID
  const getTaskDetailsByID = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(id))
      if (response.data) {
        const taskInfo = response.data;
        setTask(taskInfo)
      }
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }

  //handle todo check
  const updateTodoChecklist = async (index) => {

  }

  //Handle attachment link click
  const handlelinkClick = (link) => {
    window.open(link, "_blank")
  }

  useEffect(() => {
    if (id) {
      getTaskDetailsByID()
    }
    return () => { }
  }, [id])

  return (
    <DashboardLayout activeMenu='My Tasks'>
    View Task Details
    </DashboardLayout>
  )
}

export default ViewTaskDetails