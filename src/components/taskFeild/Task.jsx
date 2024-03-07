import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Task = ({ taskName, startTime, endTime, deleteId }) => {
    const [isChecked, setIsChecked] = useState(false);
    const uniqueId = uuidv4();

    // const editTaskHandler = (deleteId) => {
    //     console.log("this is edit" + deleteId);
    // };

    const deleteTaskHandler = (deleteId) => {
        const apiUrl = `http://localhost:8080/tasks/${deleteId}`;

        axios
            .delete(apiUrl)
            .then((res) => window.location.reload())
            .catch((error) => console.error(error));
    };

    // const formatTime = (timeString) => {
    //     const [hours, minutes] = timeString.split(":");
    //     return `${hours}:${minutes}`;
    // };

    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(":");
        let formattedHours = parseInt(hours, 10);
        let period = "AM";

        if (formattedHours === 0) {
            formattedHours = 12;
        } else if (formattedHours === 12) {
            period = "PM";
        } else if (formattedHours > 12) {
            formattedHours -= 12;
            period = "PM";
        }

        return `${formattedHours}:${minutes} ${period}`;
    };

    return (
        <div className="bg-slate-300 rounded-lg px-8 py-5 flex justify-between">
            <div className="flex items-center space-x-5 ">
                <input
                    className="h-6 w-6 accent-violet-500 rounded "
                    type="checkbox"
                    name="task"
                    id={uniqueId}
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <div className="task-text">
                    <label
                        className={`font-semibold text-xl ${
                            isChecked ? "line-through" : ""
                        } `}
                        htmlFor={uniqueId}
                    >
                        {taskName}
                    </label>
                    <div className="duration flex items-center">
                        <p className="text-base">{formatTime(startTime)}</p>
                        <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                        <p className="text-base">{formatTime(endTime)}</p>
                    </div>
                </div>
                <input type="hidden" name="categoryFK" value={deleteId} />
            </div>
            <div className="icons flex items-center space-x-3">
                <Link
                    to={`/taskUpdate/${deleteId}`}
                    type="button"
                    // onClick={() => editTaskHandler(deleteId)}
                >
                    <FaRegEdit className="size-5 text-blue-500" />
                </Link>

                <button
                    type="button"
                    onClick={() => deleteTaskHandler(deleteId)}
                >
                    <IoClose className="size-5 text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default Task;
