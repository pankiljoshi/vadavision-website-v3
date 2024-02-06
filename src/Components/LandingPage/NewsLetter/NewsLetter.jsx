import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="Frame1171281445 w-full px-20 h-24 justify-start items-center gap-96 inline-flex bg-red-300">
        <div className="JoinOurNewsletterToStayConnectedWithUs w-[50%] text-white text-4xl font-semibold font-urbaninst">
          Join our newsletter to stay connected with us!
        </div>
        <div className="Frame1171281444 justify-start items-start gap-6 flex">
          <div className="Frame4 w-72 h-12 px-4 pt-4 pb-3.5 bg-white bg-opacity-5 border border-white border-opacity-20 justify-center items-center flex">
            <div className="EnterYourEmail grow shrink basis-0 text-neutral-400 text-sm font-light font-urbaninst">
              Enter your email
            </div>
          </div>
          <div className="BookACall w-[180px] h-[48px] cursor-pointer px-10 py-4 bg-red-600 justify-center items-center gap-4 flex">
            <div className="BookACall text-white text-xl font-light font-urbaninst">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
