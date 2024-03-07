// import React, { useState, useEffect } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { AddTaskButton } from "../components/btn/Button";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import { useQuery } from "react-query";
// const UpdateTask = () => {
//     const repeatOptions = ["EVERYDAY", "EVERY_WEEK", "EVERY_MONTH"];
//     const [categories, setCategories] = useState([]);
//     const [tasks, setTasks] = useState([]);
//     const { id } = useParams();

//     // const currentDate = new Date();
//     // const myanmarTime = new Date(currentDate.getTime() + 6.5 * 60 * 60 * 1000)
//     //     .toISOString()
//     //     .split("T")[0];

//     // console.log(myanmarTime);

//     const [inputData, setInputData] = useState({
//         label: "",
//         startTime: "",
//         endTime: "",
//         repeatTime: "",
//         category: {
//             id: "",
//         },
//     });

//     const inputHandler1 = (e) => {
//         const name = e.target.value;
//         setInputData({
//             ...inputData,
//             label: name,
//         });
//     };

//     const inputHandler2 = (e) => {
//         const startTime = e.target.value;
//         setInputData({
//             ...inputData,
//             startTime: startTime,
//         });
//     };

//     const inputHandler3 = (e) => {
//         const endTime = e.target.value;
//         setInputData({
//             ...inputData,
//             endTime: endTime,
//         });
//     };

//     const taskRepeatInputHandler = (e) => {
//         const taskRepeat = e.target.value;
//         setInputData({
//             ...inputData,
//             repeatTime: taskRepeat,
//         });
//     };

//     const inputHandler5 = (e) => {
//         const category = e.target.value;
//         setInputData({
//             ...inputData,
//             category: {
//                 id: category,
//             },
//         });
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();

//         if (
//             !inputData.label ||
//             !inputData.startTime ||
//             !inputData.endTime ||
//             !inputData.repeatTime ||
//             !inputData.category.id
//         ) {
//             alert("Please fill out all required fields.");
//         } else {
//             axios
//                 .post(apiPostUrl, {
//                     label: inputData.label,
//                     startTime: inputData.startTime,
//                     endTime: inputData.endTime,
//                     repeateType: inputData.repeatTime,
//                     category: {
//                         id: inputData.category.id,
//                     },
//                 })
//                 .then((res) => {
//                     window.location.href = "/";
//                 })
//                 .catch((error) => console.error("Error" + error));
//         }
//     };

//     const apiUrl = `http://localhost:8080/tasks/${id}`;
//     const apiUrl1 = `http://localhost:8080/categories`;

//     const fetchData = async () => {
//         const response = await axios.get(apiUrl);

//         return setTasks(response.data);
//     };

//     useEffect(() => {}, []);

//     // const categoryId = tasks.category.id;

//     // console.log(categoryId);
//     // console.log(tasks.category);
//     console.log(tasks.category);

//     useEffect(() => {
//         axios
//             .get(apiUrl1)
//             .then((res) => {
//                 setCategories(res.data);
//             })
//             .catch((error) => console.error("Task have:" + error));
//     }, []);

//     // console.warn(categories);
//     // console.log(tasks);

//     const { data, status } = useQuery("users", fetchData);

//     return (
//         <div className="App">
//             {status === "error" && <p>Error fetching data</p>}
//             {status === "loading" && <p>Fetching data...</p>}
//             {status === "success" && (
//                 <div className="bg-slate-200 p-10 shadow-lg rounded-2xl">
//                     <div className="back-icon mb-5">
//                         <Link to="/">
//                             <FaArrowLeftLong className="size-6" />
//                         </Link>
//                     </div>
//                     <div className="header ">
//                         <h2 className="text-3xl font-semibold mb-3">
//                             Add Task
//                         </h2>
//                     </div>
//                     <div className="category-form mb-8">
//                         <form
//                             action=""
//                             method="POST"
//                             encType="multipart/form-data"
//                             onSubmit={submitHandler}
//                         >
//                             <div className="input-group mb-5">
//                                 <label
//                                     className="block font-semibold mb-3 text-lg"
//                                     htmlFor="name"
//                                 >
//                                     Label
//                                 </label>
//                                 <input
//                                     className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
//                                     type="text"
//                                     name="name"
//                                     id="name"
//                                     placeholder="Create Task"
//                                     autoComplete="off"
//                                     onChange={inputHandler1}
//                                     defaultValue={tasks.label}
//                                 />
//                             </div>
//                             {/* <div className="input-group mb-5">
//                         <label
//                             className="block font-semibold mb-3 text-lg"
//                             htmlFor="name"
//                         >
//                             Date
//                         </label>
//                         <input
//                             className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
//                             type="date"
//                             name="name"
//                             id="name"
//                             placeholder="Create Task"
//                             autoComplete="off"
//                             min={myanmarTime}
//                             defaultValue={myanmarTime}
//                         />
//                     </div> */}
//                             <div className="time flex space-x-4 mb-5">
//                                 <div className="input-group flex-1">
//                                     <label
//                                         className="block font-semibold mb-3 text-lg"
//                                         htmlFor="name"
//                                     >
//                                         Start
//                                     </label>
//                                     <input
//                                         className=" bg-slate-400 block w-full p-3 rounded-lg"
//                                         type="time"
//                                         name="startTime"
//                                         onChange={inputHandler2}
//                                         defaultValue={tasks.startTime}
//                                     />
//                                 </div>
//                                 <div className="input-group flex-1">
//                                     <label
//                                         className="block font-semibold mb-3 text-lg"
//                                         htmlFor="name"
//                                     >
//                                         End
//                                     </label>
//                                     <input
//                                         className=" bg-slate-400 block w-full p-3 rounded-lg"
//                                         type="time"
//                                         name="startTime"
//                                         onChange={inputHandler3}
//                                         defaultValue={tasks.endTime}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="input-group mb-5">
//                                 <label
//                                     className="block font-semibold mb-3 text-lg"
//                                     htmlFor="repeatOption"
//                                 >
//                                     Repeat
//                                 </label>

//                                 <select
//                                     className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
//                                     name="repeatOption"
//                                     id="repeatOption"
//                                     onChange={taskRepeatInputHandler}
//                                 >
//                                     <option selected disabled>
//                                         Plz Select Your Habits
//                                     </option>
//                                     {repeatOptions.map((option, index) => {
//                                         return (
//                                             <option
//                                                 onChange={
//                                                     taskRepeatInputHandler
//                                                 }
//                                                 key={index}
//                                                 defaultValue={option}
//                                                 selected={
//                                                     tasks.repeateType === option
//                                                         ? "selected"
//                                                         : ""
//                                                 }
//                                             >
//                                                 {option}
//                                             </option>
//                                         );
//                                     })}
//                                 </select>
//                             </div>
//                             <div className="input-group mb-5">
//                                 <label
//                                     className="block font-semibold mb-3 text-lg"
//                                     htmlFor="category"
//                                 >
//                                     Category
//                                 </label>
//                                 <select
//                                     className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
//                                     id="category"
//                                     name="category"
//                                     onChange={inputHandler5}
//                                 >
//                                     <option selected disabled>
//                                         Plz Select Your Category
//                                     </option>

//                                     {categories.map((category) => (
//                                         <option
//                                             value={category.id}
//                                             key={category.id}
//                                             // selected={
//                                             //     tasks.category.id == category.id
//                                             //         ? "selected"
//                                             //         : ""
//                                             // }
//                                         >
//                                             {category.name}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <div className="">
//                                 <AddTaskButton />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UpdateTask;

import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AddTaskButton } from "../components/btn/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const UpdateTask = () => {
    const repeatOptions = ["EVERYDAY", "EVERY_WEEK", "EVERY_MONTH"];
    const [task, setTask] = useState([]);
    const { id } = useParams();

    const [inputData, setInputData] = useState({
        label: "",
        startTime: "",
        endTime: "",
        repeatTime: "",
        category: {
            id: "",
        },
    });

    const {
        data: tasks,
        status: taskStatus,
        error: taskError,
    } = useQuery(["task", id], () =>
        axios.get(`http://localhost:8080/tasks/${id}`).then((res) => {
            setTask(res.data);
        })
    );

    const {
        data: categories,
        status: categoryStatus,
        error: categoryError,
    } = useQuery("categories", () =>
        axios.get("http://localhost:8080/categories").then((res) => res.data)
    );

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

    const taskRepeatInputHandler = (e) => {
        const taskRepeat = e.target.value;
        setInputData({
            ...inputData,
            repeatTime: taskRepeat,
        });
    };

    const inputHandler5 = (e) => {
        const category = e.target.value;
        setInputData({
            ...inputData,
            category: {
                id: category,
            },
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

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
                    window.location.href = "/";
                })
                .catch((error) => console.error("Error" + error));
        }
    };

    return (
        <div className="App">
            {taskStatus === "loading" ||
                (categoryStatus === "loading" && <p>Loading...</p>)}
            {taskStatus === "error" && (
                <p>Error fetching task data: {taskError.message}</p>
            )}
            {categoryStatus === "error" && (
                <p>Error fetching category data: {categoryError.message}</p>
            )}
            {taskStatus === "success" && categoryStatus === "success" && (
                <div className="bg-slate-200 p-10 shadow-lg rounded-2xl">
                    <div className="back-icon mb-5">
                        <Link to="/">
                            <FaArrowLeftLong className="size-6" />
                        </Link>
                    </div>
                    <div className="header ">
                        <h2 className="text-3xl font-semibold mb-3">
                            Add Task
                        </h2>
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
                                    defaultValue={task.label}
                                />
                            </div>
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
                                        defaultValue={task.startTime}
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
                                        defaultValue={task.endTime}
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
                                                onChange={
                                                    taskRepeatInputHandler
                                                }
                                                key={index}
                                                defaultValue={option}
                                                selected={
                                                    task.repeateType === option
                                                        ? "selected"
                                                        : ""
                                                }
                                            >
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>
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
                                        <option
                                            defaultValue={category.id}
                                            key={category.id}
                                            selected={
                                                task.category.id == category.id
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
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
            )}
        </div>
    );
};

export default UpdateTask;
