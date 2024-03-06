import React from "react";

const Project = ({ url, name, techstack }) => {
  return (
    <div className="w-[100%] hover:bg-gray-700 bg-gray-800  p-2 md:p-4 mt-5">
      <a href={url} target="_blank" rel="noreferrer">
        <h1 className="text-xl md:text-2xl mb-3">{name}</h1>
        <div className="text-[17px] md:text-xl">
          {techstack.frontend ? (
            <span className="font-bold">
              {techstack.frontend}{" "}
              <span className="font-normal"> for Frontend </span>
            </span>
          ) : (
            ""
          )}
          {techstack.backend ? (
            <span className="font-bold">
              {techstack.backend} <span className="font-normal"> for Backend </span>{" "}
            </span>
          ) : (
            ""
          )}
          {techstack.database ? (
            <span className="font-bold">
              {techstack.database}{" "}
              <span className="font-normal"> for Database </span>{" "}
            </span>
          ) : (
            ""
          )}
          {techstack.api ? (
            <span className="font-bold">
              {techstack.api} <span className="font-normal"> for Api </span>{" "}
            </span>
          ) : (
            ""
          )}
          {techstack.other ? (
            <span className="font-bold">
              <span className="font-normal"> Used </span> {techstack.other}{" "}
            </span>
          ) : (
            ""
          )}
        </div>
      </a>
    </div>
  );
};

export default Project;
