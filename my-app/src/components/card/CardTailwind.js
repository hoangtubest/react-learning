import React from "react";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold bg-clip-text text-transparent ${
    props.colorAmount ? "bg-secondary-gradient" : "bg-primary-gradient"
  }`;
  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden rounded-lg">
        <img
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768"
          alt="Card Image"
          className="w-full h-full rounded-lg object-cover object-center"
        />
      </div>
      <div className="relative z-[1] bg-white rounded-[20px] w-[calc(100%-40px)] p-[20px] mx-auto -translate-y-2/4">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-x-[12px]">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/6349608/dribble.jpg?resize=800x600&vertical=center"
              alt="Avatar"
              className="w-[30px] h-[30px] rounded-full shrink-0"
            />
            <span className="text-base font-light c-[#333] leading-[1.5]">
              @zndrson
            </span>
          </div>
          <div className="flex justify-between items-center gap-x-[12px]">
            <img
              src="/ico_heart.svg"
              alt="Heart"
              className="w-[20px] shrink-0"
            />
            <span className="text-base font-normal c-[#333] leading-[1.5]">
              256
            </span>
          </div>
        </div>
        <div className="mt-[30px] flex justify-between items-center gap-x-[12px]">
          <h3 className={`font-medium ${props.fontSize || "text-xl"}`}>
            Cosmic Perspective
          </h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
