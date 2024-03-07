import React, { useEffect, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { Category, AllCategory } from "../components/categoryfeild/Category";
import { CategoryIcon, addMore } from "../components/img";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HomeAddTaskButton } from "../components/btn/Button";
import { Link } from "react-router-dom";
import Task from "../components/taskFeild/Task";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const Home = () => {
    const sliderRef = useRef(null);
    const [tasks, setTasks] = useState([]);
    const [filterTasks, setFilteredTasks] = useState(tasks);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showIcons, setShowIcons] = useState(null);
    const [categories, setCategories] = useState([]);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 200;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 200;
        }
    };

    const handleScroll = (event) => {
        if (sliderRef.current) {
            const delta = Math.max(
                -1,
                Math.min(
                    1,
                    event.nativeEvent.wheelDelta || -event.nativeEvent.detail
                )
            );
            sliderRef.current.scrollLeft -= delta * 150;
        }
    };

    const categoryHandler = (id) => {
        const filteredTasks = tasks.filter((task) => task.category?.id == id);

        console.warn(filteredTasks);

        setFilteredTasks(filteredTasks);
        setSelectedCategory(id);
    };

    const handleDoubleClick = (e, id) => {
        e.stopPropagation();
        setShowIcons(id);
    };

    const clearFilter = () => {
        setFilteredTasks(tasks);
        setSelectedCategory(null);
    };

    const apiUrl = "http://localhost:8080/categories";
    const apiUrl1 = "http://localhost:8080/tasks";

    // useEffect(() => {
    //     axios
    //         .get(apiUrl)
    //         .then((res) => {
    //             setCategories(res.data);
    //         })
    //         .catch((error) => console.error("Category have:" + error));

    //     axios
    //         .get(apiUrl1)
    //         .then((res) => {
    //             // console.log(res);
    //             // console.log(res.data);
    //             setTasks(res.data);
    //         })
    //         .catch((error) => console.error("Task have:" + error));
    // }, []);

    useEffect(() => {
        axios
            .get(apiUrl1)
            .then((res) => {
                setTasks(res.data);
                setFilteredTasks(res.data);

                // Nested Axios call for categories
                axios
                    .get(apiUrl)
                    .then((res) => {
                        setCategories(res.data);
                    })
                    .catch((error) =>
                        console.error("Category error: " + error)
                    );
            })
            .catch((error) => console.error("Task error: " + error));
    }, []);

    const editCategoryHandler = (categoryFK) => {
        console.log("this is edit" + categoryFK);
    };

    const deleteCategoryHandler = (categoryFK) => {
        const delete_api = `http://localhost:8080/categories/${categoryFK}`;

        axios
            .delete(delete_api)
            .then((response) => {
                setCategories(
                    categories.filter((category) => category.id !== categoryFK)
                );
                // window.location.reload();
            })
            .catch((error) => {
                console.error("Error deleting category:", error);
            });
    };

    // console.log(tasks.startTime);

    // console.log(new Date().getHours());

    return (
        <div className=" bg-slate-200 shadow-lg p-10 rounded-2xl">
            <div className="icon-nav flex justify-between mb-8">
                <div className="menu-icon">
                    <CgMenuLeft className="size-6" />
                </div>

                <div className="flex space-x-5">
                    <RiSearchLine className="size-6" />
                    <IoNotificationsOutline className="size-6" />
                </div>
            </div>
            <div className="header mb-5">
                <h2 className="text-3xl font-semibold mb-3">
                    Hey there, Vally
                </h2>
                <p className="text-slate-500 font-medium text-base">
                    Organize your plans for the day
                </p>
            </div>
            <div className="category-container mb-3">
                <div className="title font-semibold mb-5 flex justify-between items-center">
                    <div className="text-xl">Categories</div>
                    <Link className="text-sm" to="/category">
                        <img
                            className="size-7 bg-slate-400 p-2 rounded-full"
                            src={addMore.Plus2.icon}
                            alt="this is icon"
                        />
                    </Link>
                </div>
                <div className="flex items-center">
                    <MdChevronLeft
                        className="opacity-50 cursor-pointer hover:opacity-100 size-14"
                        onClick={slideLeft}
                    />
                    <div
                        className="category-scroll-container overflow-x-scroll scroll-smooth scroll scrollbar-hide"
                        ref={sliderRef}
                        onWheel={handleScroll}
                    >
                        <div className="category-wrap flex space-x-5 items-start">
                            <button onClick={clearFilter}>
                                <AllCategory />
                            </button>
                            {categories.map((category) => (
                                <button
                                    className="Category"
                                    key={category.id}
                                    onClick={() => categoryHandler(category.id)}
                                    onDoubleClick={(e) =>
                                        handleDoubleClick(e, category.id)
                                    }
                                >
                                    <Category
                                        img={category.imgUrl}
                                        title={category.name}
                                    />
                                    {showIcons === category.id && (
                                        <div className="mt-3 icons flex justify-center items-center space-x-3">
                                            <Link
                                                to={`/categoryUpdate/${category.id}`}
                                                onClick={() =>
                                                    editCategoryHandler(
                                                        category.id
                                                    )
                                                }
                                            >
                                                <FaRegEdit className="size-5 text-blue-500" />
                                            </Link>
                                            <a
                                                onClick={() =>
                                                    deleteCategoryHandler(
                                                        category.id
                                                    )
                                                }
                                            >
                                                <IoClose className="size-5 text-red-500" />
                                            </a>
                                        </div>
                                    )}
                                </button>
                            ))}
                            {/* <Link to="/category">
                                <AddCategory />
                            </Link> */}
                        </div>
                    </div>
                    <MdChevronRight
                        className="opacity-50 cursor-pointer hover:opacity-100 size-14"
                        onClick={slideRight}
                    />
                </div>
            </div>

            <div className="task-container mb-5">
                <div className="task-header flex justify-between items-center mb-2">
                    <div className="title text-xl font-semibold ">
                        Today's Tasks
                    </div>
                    {selectedCategory != null && (
                        <button onClick={clearFilter}>Clear Filter</button>
                    )}
                </div>
                <div className="mb-5">
                    <p>There are {tasks.length} task for todays </p>
                </div>
                <div className="task-container ">
                    <div className="task-scroll-container overflow-y-scroll max-h-[320px]  scroll-smooth scroll scrollbar-hide ">
                        {selectedCategory && filterTasks.length === 0 && (
                            <p>No tasks available for this category</p>
                        )}
                        <div className="task-wrap space-y-5 ">
                            {filterTasks.map((task) => (
                                <Task
                                    key={task.id}
                                    taskName={task.label}
                                    startTime={task.startTime}
                                    endTime={task.endTime}
                                    deleteId={task.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Link to="/task">
                    <HomeAddTaskButton />
                </Link>
            </div>
        </div>
    );
};

export default Home;
