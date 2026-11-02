const Progress = ({ progress, status }) => {
    const getColor = () => {
        switch (status) {
            case "In Progress":
                return "bg-cyan-500"
            case "Completed":
                return "bg-indigo-500"
            default:
                return "bg-violet-500"
        }
    }

    const progressValue = status === "Completed"
        ? 100
        : Math.min(100, Math.max(0, Number(progress) || 0))

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
                className={`${getColor()} h-1.5 rounded-full transition-[width]`}
                role="progressbar"
                aria-valuenow={progressValue}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${progressValue}%` }}
            >
            </div>
        </div> 
    )
}

export default Progress