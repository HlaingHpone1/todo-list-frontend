import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AddCategoryButton } from "../components/btn/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const UpdateCategory = () => {
    const [inputData, setInputData] = useState({
        name: "",
        image: "",
    });

    // const apiUrl = "http://localhost:8080/categories";

    const categoryInputHandler = (e) => {
        const categoryName = e.target.value;
        setInputData({
            ...inputData,
            name: categoryName,
        });
    };

    const categoryImageHandler = (e) => {
        const file = e.target.value;
        setInputData({
            ...inputData,
            image: file,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!inputData.image || !inputData.name) {
            alert("Please fill out all required fields.");
        } else {
            // axios
            //     .post(apiUrl, { name: inputData.name, imgUrl: inputData.image })
            //     .then(() => {
            //         window.location.href = "/";
            //         // window.location.reload();
            //     })
            //     .catch((error) => console.error("Error" + error));
        }
    };

    return (
        <div className="bg-slate-200 p-10 shadow-lg rounded-2xl">
            <div className="back-icon mb-5">
                <Link to="/">
                    <FaArrowLeftLong className="size-6" />
                </Link>
            </div>
            <div className="header">
                <h2 className="text-3xl font-semibold mb-3">Add Category</h2>
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
                            Category Name
                        </label>
                        <input
                            className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
                            type="text"
                            name="name"
                            id="name"
                            onChange={categoryInputHandler}
                            placeholder="Create Category"
                            maxlength="25"
                        />
                    </div>
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="img"
                        >
                            Image For Category
                        </label>
                        <input
                            className="block w-full py-3.5 file:py-2.5  px-5 focus:outline-none file:px-3 file:border-0 file:bg-slate-500 file:text-white rounded-lg bg-[#7F8EA3] text-white placeholder:text-gray-900"
                            type="text"
                            name="img"
                            id="img"
                            onChange={categoryImageHandler}
                            placeholder="Image"
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

export default UpdateCategory;
