import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AddTaskButton } from "../components/btn/Button";
import { Link } from "react-router-dom";
import { repeatTime, times } from "../components/demo";
import axios from "axios";
const AddTask = () => {
    // const currentDate = new Date();
    // const myanmarTime = new Date(currentDate.getTime() + 6.5 * 60 * 60 * 1000)
    //     .toISOString()
    //     .split("T")[0];

    // console.log(myanmarTime);

    const [inputData, setInputData] = useState({
        label: "",
        startTime: "",
        endTime: "",
        repeatTime: "",
        category: {
            id: "",
        },
    });

    const inputHandler1 = (e) => {
        const name = e.target.value;
        setInputData({
            ...inputData,
            label: name,
        });
    };

    const inputHandler2 = (e) => {
        const startTime = e.target.value;
        setInputData({
            ...inputData,
            startTime: startTime,
        });
    };

    const inputHandler3 = (e) => {
        const endTime = e.target.value;
        setInputData({
            ...inputData,
            endTime: endTime,
        });
    };

    const inputHandler4 = (e) => {
        const repeat = e.target.value;
        setInputData({
            ...inputData,
            repeatTime: repeat,
        });
    };

    const inputHandler5 = (e) => {
        const category = e.target.value;
        // console.log(category);
        setInputData({
            ...inputData,
            category: {
                id: category,
            },
        });
    };

    console.log(inputData);

    const [categories, setCategories] = useState([]);
    const apiUrl = "http://localhost:8080/categories";

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((res) => {
                setCategories(res.data);
                console.log(res.data);
            })
            .catch((error) => console.error("Category have:" + error));
    }, []);

    const apiPostUrl = "http://localhost:8080/tasks";

    const repeatOptions = ["EVERYDAY", "EVERY_WEEK", "EVERY_MONTH"];

    const taskRepeatInputHandler = (e) => {
        const taskRepeat = e.target.value;
        setInputData({
            ...inputData,
            repeatTime: taskRepeat,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(inputData.category.id);
        // console.log(inputData.category);

        if (
            !inputData.label ||
            !inputData.startTime ||
            !inputData.endTime ||
            !inputData.repeatTime ||
            !inputData.category.id
        ) {
            alert("Please fill out all required fields.");
        } else {
            axios
                .post(apiPostUrl, {
                    label: inputData.label,
                    startTime: inputData.startTime,
                    endTime: inputData.endTime,
                    repeateType: inputData.repeatTime,
                    category: {
                        id: inputData.category.id,
                    },
                })
                .then((res) => {
                    // console.log(res);
                    // console.log(res.data);
                    window.location.href = "/";
                })
                .catch((error) => console.error("Error" + error));
        }
    };

    return (
        <div className="bg-slate-200 p-10 shadow-lg rounded-2xl">
            <div className="back-icon mb-5">
                <Link to="/">
                    <FaArrowLeftLong className="size-6" />
                </Link>
            </div>
            <div className="header ">
                <h2 className="text-3xl font-semibold mb-3">Add Task</h2>
            </div>
            <div className="category-form mb-8">
                <form
                    action=""
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={submitHandler}
                >
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="name"
                        >
                            Label
                        </label>
                        <input
                            className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Create Task"
                            autoComplete="off"
                            onChange={inputHandler1}
                        />
                    </div>
                    {/* <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="name"
                        >
                            Date
                        </label>
                        <input
                            className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
                            type="date"
                            name="name"
                            id="name"
                            placeholder="Create Task"
                            autoComplete="off"
                            min={myanmarTime}
                            defaultValue={myanmarTime}
                        />
                    </div> */}
                    <div className="time flex space-x-4 mb-5">
                        <div className="input-group flex-1">
                            <label
                                className="block font-semibold mb-3 text-lg"
                                htmlFor="name"
                            >
                                Start
                            </label>
                            <input
                                className=" bg-slate-400 block w-full p-3 rounded-lg"
                                type="time"
                                name="startTime"
                                onChange={inputHandler2}
                            />
                        </div>
                        <div className="input-group flex-1">
                            <label
                                className="block font-semibold mb-3 text-lg"
                                htmlFor="name"
                            >
                                End
                            </label>
                            <input
                                className=" bg-slate-400 block w-full p-3 rounded-lg"
                                type="time"
                                name="startTime"
                                onChange={inputHandler3}
                            />
                        </div>
                    </div>
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="repeatOption"
                        >
                            Repeat
                        </label>

                        <select
                            className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
                            name="repeatOption"
                            id="repeatOption"
                            onChange={taskRepeatInputHandler}
                        >
                            <option selected disabled>
                                Plz Select Your Habits
                            </option>
                            {repeatOptions.map((option, index) => {
                                return (
                                    <option
                                        onChange={taskRepeatInputHandler}
                                        key={index}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                );
                            })}
                        </select>

                        {/* <select
                            className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
                            name="startTime"
                            id="time1"
                            onChange={inputHandler4}
                        >
                            <option selected disabled>
                                Plz Select Your Habits
                            </option>
                            {repeatTime.map((time, index) => (
                                <option key={index} value={time.label}>
                                    {time.label}
                                </option>
                            ))}
                        </select> */}
                    </div>
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
                            id="category"
                            name="category"
                            onChange={inputHandler5}
                        >
                            <option selected disabled>
                                Plz Select Your Category
                            </option>

                            {categories.map((category) => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="">
                        <AddTaskButton />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
