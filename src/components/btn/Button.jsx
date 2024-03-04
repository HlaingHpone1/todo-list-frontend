import React from "react";
import { addMore } from "../img";
import { Link } from "react-router-dom";

export const AddTaskButton = ({ path }) => {
    return (
        <div>
            <Link
                className="flex items-center justify-center w-full bg-violet-500 text-white py-5 rounded-lg"
                to={path}
            >
                <img
                    className="size-5 me-3"
                    src={addMore.Plus2.icon}
                    alt="This is icon"
                />{" "}
                Add Task
            </Link>
        </div>
    );
};

export const AddCategoryButton = () => {
    return (
        <div>
            <Link
                className="flex items-center justify-center w-full bg-violet-500 text-white py-5 rounded-lg"
                to="/"
            >
                <img
                    className="size-5 me-3"
                    src={addMore.Plus2.icon}
                    alt="This is icon"
                />{" "}
                Add Category
            </Link>
        </div>
    );
};
