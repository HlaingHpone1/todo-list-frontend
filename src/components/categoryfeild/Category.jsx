import React from "react";
import { addMore } from "../img";

export const Category = ({ img, title }) => {
    return (
        <div>
            <div className="img-box aspect-square w-16 space-y-2">
                <img
                    className="block bg-slate-300 p-5 rounded-full aspect-square w-full h-full"
                    src={img}
                    alt="This is icon"
                />
                <p className="font-semibold text-sm text-center break-all">
                    {title}
                </p>
            </div>
        </div>
    );
};

export const AddCategory = () => {
    return (
        <div>
            <div className="img-box aspect-square w-16">
                <img
                    className="block bg-slate-300 p-5 rounded-full aspect-square w-full h-full"
                    src={addMore.Plus.icon}
                    alt="This is icon"
                />
                <p className="font-semibold text-sm text-center">
                    {addMore.Plus.title}
                </p>
            </div>
        </div>
    );
};
