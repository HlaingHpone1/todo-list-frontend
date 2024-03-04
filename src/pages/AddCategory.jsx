import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AddCategoryButton } from "../components/btn/Button";
import { Link } from "react-router-dom";

const AddCategory = () => {
    return (
        <div className="bg-slate-200 p-10 rounded-2xl">
            <div className="back-icon mb-5">
                <Link to="/">
                    <FaArrowLeftLong className="size-6" />
                </Link>
            </div>
            <div className="header">
                <h2 className="text-3xl font-semibold mb-3">Add Category</h2>
            </div>
            <div className="category-form mb-8">
                <form action="">
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="img"
                        >
                            Image For Category
                        </label>
                        <input
                            className="block w-full file:py-2.5 file:px-3 file:border-0 file:bg-slate-500 file:text-white rounded-lg bg-[#7F8EA3] text-white"
                            type="file"
                            name="img"
                            id="img"
                        />
                    </div>
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="name"
                        >
                            Category Name
                        </label>
                        <input
                            className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Create Category"
                        />
                    </div>
                    <div className="">
                        <AddCategoryButton />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
