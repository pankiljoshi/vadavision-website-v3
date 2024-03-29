import React from "react";

const OpenRoles = () => {
  return (
    <>
      <div className="w-full py-20 px-20 Unique bg-cover">
        <div className=" ">
          <span className="text-neutral-400 text-[40px] font-semibold urbanist">
            Check out the
            <br />
          </span>
          <span className="text-pink-600 text-[56px] open-roles-gradient font-bold urbanist">
            Open Roles
          </span>
        </div>
        <div className="w-full justify-center items-center gap-6 pt-10   inline-flex">
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-20 backdrop-blur-[80px] justify-center items-center gap-2.5 flex">
            <div className=" text-zinc-100 text-xl font-semibold urbanist">
              All Roles{" "}
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Development
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Marketing
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Sales
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              HR & Administration
            </div>
          </div>
        </div>
        <div className="w-full flex-col justify-start pt-20 items-start gap-14 inline-flex">
          <div className="flex-col w-full justify-start items-start gap-8 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[892px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-[32px] font-semibold urbanist">
                  Frontend Developer
                </div>
                <div className="justify-start items-start gap-10 inline-flex">
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4557)">
                          <path
                            d="M12 0.28125C5.53027 0.28125 0.28125 5.53031 0.28125 12C0.28125 18.4697 5.53027 23.7188 12 23.7188C18.4697 23.7188 23.7188 18.4697 23.7188 12C23.7188 5.53027 18.4697 0.28125 12 0.28125ZM20.4574 18.6859C19.4024 18.0745 18.213 17.6264 17.0289 17.3148C17.3858 15.826 17.5889 14.1795 17.6203 12.4688H22.7709C22.6723 14.7315 21.8621 16.9103 20.4574 18.6859ZM3.54267 18.6859C2.13797 16.9103 1.32773 14.7315 1.22911 12.4688H6.37969C6.41109 14.1795 6.6142 15.826 6.97111 17.3148C5.77833 17.6345 4.61944 18.0611 3.54267 18.6859ZM3.54262 5.31408C4.59389 5.92233 5.77312 6.3697 6.97111 6.68522C6.61416 8.17397 6.41109 9.8205 6.37969 11.5312H1.22911C1.32773 9.26841 2.13797 7.08966 3.54262 5.31408ZM12.4688 16.6932V12.4688H16.6827C16.6516 14.1093 16.4574 15.6832 16.1171 17.1006C15.0033 16.8686 13.7643 16.722 12.4688 16.6932ZM7.88292 17.1006C7.54261 15.6832 7.34836 14.1093 7.31728 12.4688H11.5312V16.6932C10.2512 16.7217 9.02034 16.864 7.88292 17.1006ZM11.5312 7.30683V11.5312H7.31728C7.34836 9.89067 7.54261 8.3168 7.88292 6.89944C9.02447 7.13588 10.241 7.27805 11.5312 7.30683ZM12.4688 11.5312V7.30683C13.7289 7.2787 14.9536 7.1408 16.1171 6.89944C16.4574 8.3168 16.6516 9.89067 16.6827 11.5312H12.4688ZM12.4688 6.36909V1.27814C13.4756 1.52948 14.4578 2.57761 15.2199 4.24036C15.4674 4.78045 15.6856 5.36822 15.8732 5.99377C14.751 6.22261 13.5998 6.34364 12.4688 6.36909ZM11.5312 1.27814V6.36909C10.376 6.34308 9.22453 6.21783 8.12677 5.99377C8.31441 5.36822 8.53256 4.78045 8.78011 4.24036C9.5422 2.57756 10.5244 1.52944 11.5312 1.27814ZM11.5312 17.6309V22.7219C10.5244 22.4705 9.5422 21.4224 8.78011 19.7596C8.53256 19.2195 8.31441 18.6318 8.12677 18.0062C9.23119 17.782 10.3702 17.6571 11.5312 17.6309ZM12.4688 22.7219V17.6309C13.684 17.6582 14.8139 17.791 15.8732 18.0062C15.6856 18.6318 15.4675 19.2195 15.2199 19.7596C14.4578 21.4224 13.4756 22.4705 12.4688 22.7219ZM17.6203 11.5312C17.5889 9.8205 17.3858 8.17397 17.0289 6.68522C18.2152 6.3712 19.4004 5.92716 20.4574 5.31408C21.8621 7.08966 22.6723 9.26841 22.7709 11.5312H17.6203ZM19.8312 4.59098C18.8874 5.11706 17.8451 5.50266 16.7875 5.78114C16.3488 4.29802 15.6373 2.64937 14.569 1.52944C16.5664 2.01909 18.3955 3.07364 19.8312 4.59098ZM9.43092 1.52944C8.36259 2.64937 7.65117 4.29806 7.21247 5.78114C6.16012 5.5042 5.11969 5.12025 4.16873 4.59098C5.60452 3.07364 7.43358 2.01909 9.43092 1.52944ZM4.16878 19.409C5.12616 18.8771 6.16134 18.4943 7.21252 18.2189C7.65122 19.7018 8.36264 21.3507 9.43097 22.4705C7.43353 21.9809 5.60452 20.9264 4.16878 19.409ZM14.569 22.4706C15.6361 21.352 16.3479 19.7048 16.7875 18.2189C17.8268 18.4916 18.8773 18.878 19.8313 19.409C18.3955 20.9264 16.5664 21.9809 14.569 22.4706Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4557">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Remote
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4566)">
                          <path
                            d="M11.9996 0C5.38349 0 0 5.38306 0 12C0 18.6169 5.38349 24 11.9996 24C18.6169 24 23.9996 18.6169 23.9996 12C23.9996 5.38306 18.6169 0 11.9996 0ZM11.9996 22.4001C6.26514 22.4001 1.59991 17.7349 1.59991 12C1.59991 6.26514 6.26557 1.59991 11.9996 1.59991C17.7349 1.59991 22.3997 6.26514 22.3997 12C22.3997 17.7349 17.7353 22.4001 11.9996 22.4001Z"
                            fill="#DD4243"
                          />
                          <path
                            d="M17.9427 11.1313H12.7997V4.3311C12.7997 3.8892 12.4415 3.53093 12 3.53093C11.559 3.53093 11.2007 3.88963 11.2007 4.3311V12.7308H17.9427C18.3841 12.7308 18.7424 12.3729 18.742 11.931C18.742 11.4895 18.3833 11.1313 17.9427 11.1313Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4566">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Full-time
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[195px] cursor-pointer px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
                <div className="text-white text-base font-normal urbanist">
                  View Details
                </div>
                <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.52858 3.52859C5.78892 3.26824 6.21103 3.26824 6.47138 3.52859L10.4714 7.52859C10.7317 7.78894 10.7317 8.21105 10.4714 8.4714L6.47138 12.4714C6.21103 12.7317 5.78892 12.7317 5.52858 12.4714C5.26823 12.2111 5.26823 11.7889 5.52858 11.5286L9.05717 8L5.52858 4.4714C5.26823 4.21105 5.26823 3.78894 5.52858 3.52859Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[0px] uiux-border-style "></div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full self-stretch justify-between items-center inline-flex">
              <div className="w-[892px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-[32px] font-semibold urbanist">
                  MERN Developer
                </div>
                <div className="justify-start items-start gap-10 inline-flex">
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4657)">
                          <path
                            d="M12 0.28125C5.53027 0.28125 0.28125 5.53031 0.28125 12C0.28125 18.4697 5.53027 23.7188 12 23.7188C18.4697 23.7188 23.7188 18.4697 23.7188 12C23.7188 5.53027 18.4697 0.28125 12 0.28125ZM20.4574 18.6859C19.4024 18.0745 18.213 17.6264 17.0289 17.3148C17.3858 15.826 17.5889 14.1795 17.6203 12.4688H22.7709C22.6723 14.7315 21.8621 16.9103 20.4574 18.6859ZM3.54267 18.6859C2.13797 16.9103 1.32773 14.7315 1.22911 12.4688H6.37969C6.41109 14.1795 6.6142 15.826 6.97111 17.3148C5.77833 17.6345 4.61944 18.0611 3.54267 18.6859ZM3.54262 5.31408C4.59389 5.92233 5.77312 6.3697 6.97111 6.68522C6.61416 8.17397 6.41109 9.8205 6.37969 11.5312H1.22911C1.32773 9.26841 2.13797 7.08966 3.54262 5.31408ZM12.4688 16.6932V12.4688H16.6827C16.6516 14.1093 16.4574 15.6832 16.1171 17.1006C15.0033 16.8686 13.7643 16.722 12.4688 16.6932ZM7.88292 17.1006C7.54261 15.6832 7.34836 14.1093 7.31728 12.4688H11.5312V16.6932C10.2512 16.7217 9.02034 16.864 7.88292 17.1006ZM11.5312 7.30683V11.5312H7.31728C7.34836 9.89067 7.54261 8.3168 7.88292 6.89944C9.02447 7.13588 10.241 7.27805 11.5312 7.30683ZM12.4688 11.5312V7.30683C13.7289 7.2787 14.9536 7.1408 16.1171 6.89944C16.4574 8.3168 16.6516 9.89067 16.6827 11.5312H12.4688ZM12.4688 6.36909V1.27814C13.4756 1.52948 14.4578 2.57761 15.2199 4.24036C15.4674 4.78045 15.6856 5.36822 15.8732 5.99377C14.751 6.22261 13.5998 6.34364 12.4688 6.36909ZM11.5312 1.27814V6.36909C10.376 6.34308 9.22453 6.21783 8.12677 5.99377C8.31441 5.36822 8.53256 4.78045 8.78011 4.24036C9.5422 2.57756 10.5244 1.52944 11.5312 1.27814ZM11.5312 17.6309V22.7219C10.5244 22.4705 9.5422 21.4224 8.78011 19.7596C8.53256 19.2195 8.31441 18.6318 8.12677 18.0062C9.23119 17.782 10.3702 17.6571 11.5312 17.6309ZM12.4688 22.7219V17.6309C13.684 17.6582 14.8139 17.791 15.8732 18.0062C15.6856 18.6318 15.4675 19.2195 15.2199 19.7596C14.4578 21.4224 13.4756 22.4705 12.4688 22.7219ZM17.6203 11.5312C17.5889 9.8205 17.3858 8.17397 17.0289 6.68522C18.2152 6.3712 19.4004 5.92716 20.4574 5.31408C21.8621 7.08966 22.6723 9.26841 22.7709 11.5312H17.6203ZM19.8312 4.59098C18.8874 5.11706 17.8451 5.50266 16.7875 5.78114C16.3488 4.29802 15.6373 2.64937 14.569 1.52944C16.5664 2.01909 18.3955 3.07364 19.8312 4.59098ZM9.43092 1.52944C8.36259 2.64937 7.65117 4.29806 7.21247 5.78114C6.16012 5.5042 5.11969 5.12025 4.16873 4.59098C5.60452 3.07364 7.43358 2.01909 9.43092 1.52944ZM4.16878 19.409C5.12616 18.8771 6.16134 18.4943 7.21252 18.2189C7.65122 19.7018 8.36264 21.3507 9.43097 22.4705C7.43353 21.9809 5.60452 20.9264 4.16878 19.409ZM14.569 22.4706C15.6361 21.352 16.3479 19.7048 16.7875 18.2189C17.8268 18.4916 18.8773 18.878 19.8313 19.409C18.3955 20.9264 16.5664 21.9809 14.569 22.4706Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4657">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Remote
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4662)">
                          <path
                            d="M11.9996 0C5.38349 0 0 5.38306 0 12C0 18.6169 5.38349 24 11.9996 24C18.6169 24 23.9996 18.6169 23.9996 12C23.9996 5.38306 18.6169 0 11.9996 0ZM11.9996 22.4001C6.26514 22.4001 1.59991 17.7349 1.59991 12C1.59991 6.26514 6.26557 1.59991 11.9996 1.59991C17.7349 1.59991 22.3997 6.26514 22.3997 12C22.3997 17.7349 17.7353 22.4001 11.9996 22.4001Z"
                            fill="#DD4243"
                          />
                          <path
                            d="M17.9427 11.1313H12.7997V4.33112C12.7997 3.88921 12.4415 3.53094 12 3.53094C11.559 3.53094 11.2007 3.88964 11.2007 4.33112V12.7308H17.9427C18.3841 12.7308 18.7424 12.3729 18.742 11.931C18.742 11.4896 18.3833 11.1313 17.9427 11.1313Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4662">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Full-time
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[195px] cursor-pointer px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
                <div className="text-white text-base font-normal urbanist">
                  View Details
                </div>
                <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.52858 3.52859C5.78892 3.26824 6.21103 3.26824 6.47138 3.52859L10.4714 7.52859C10.7317 7.78894 10.7317 8.21105 10.4714 8.4714L6.47138 12.4714C6.21103 12.7317 5.78892 12.7317 5.52858 12.4714C5.26823 12.2111 5.26823 11.7889 5.52858 11.5286L9.05717 8L5.52858 4.4714C5.26823 4.21105 5.26823 3.78894 5.52858 3.52859Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[0px] uiux-border-style "></div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch w-full justify-between items-center inline-flex">
              <div className="w-[892px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-[32px] font-semibold urbanist">
                  Business Development Executive (BDE)
                </div>
                <div className="justify-start items-start gap-10 inline-flex">
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4657)">
                          <path
                            d="M12 0.28125C5.53027 0.28125 0.28125 5.53031 0.28125 12C0.28125 18.4697 5.53027 23.7188 12 23.7188C18.4697 23.7188 23.7188 18.4697 23.7188 12C23.7188 5.53027 18.4697 0.28125 12 0.28125ZM20.4574 18.6859C19.4024 18.0745 18.213 17.6264 17.0289 17.3148C17.3858 15.826 17.5889 14.1795 17.6203 12.4688H22.7709C22.6723 14.7315 21.8621 16.9103 20.4574 18.6859ZM3.54267 18.6859C2.13797 16.9103 1.32773 14.7315 1.22911 12.4688H6.37969C6.41109 14.1795 6.6142 15.826 6.97111 17.3148C5.77833 17.6345 4.61944 18.0611 3.54267 18.6859ZM3.54262 5.31408C4.59389 5.92233 5.77312 6.3697 6.97111 6.68522C6.61416 8.17397 6.41109 9.8205 6.37969 11.5312H1.22911C1.32773 9.26841 2.13797 7.08966 3.54262 5.31408ZM12.4688 16.6932V12.4688H16.6827C16.6516 14.1093 16.4574 15.6832 16.1171 17.1006C15.0033 16.8686 13.7643 16.722 12.4688 16.6932ZM7.88292 17.1006C7.54261 15.6832 7.34836 14.1093 7.31728 12.4688H11.5312V16.6932C10.2512 16.7217 9.02034 16.864 7.88292 17.1006ZM11.5312 7.30683V11.5312H7.31728C7.34836 9.89067 7.54261 8.3168 7.88292 6.89944C9.02447 7.13588 10.241 7.27805 11.5312 7.30683ZM12.4688 11.5312V7.30683C13.7289 7.2787 14.9536 7.1408 16.1171 6.89944C16.4574 8.3168 16.6516 9.89067 16.6827 11.5312H12.4688ZM12.4688 6.36909V1.27814C13.4756 1.52948 14.4578 2.57761 15.2199 4.24036C15.4674 4.78045 15.6856 5.36822 15.8732 5.99377C14.751 6.22261 13.5998 6.34364 12.4688 6.36909ZM11.5312 1.27814V6.36909C10.376 6.34308 9.22453 6.21783 8.12677 5.99377C8.31441 5.36822 8.53256 4.78045 8.78011 4.24036C9.5422 2.57756 10.5244 1.52944 11.5312 1.27814ZM11.5312 17.6309V22.7219C10.5244 22.4705 9.5422 21.4224 8.78011 19.7596C8.53256 19.2195 8.31441 18.6318 8.12677 18.0062C9.23119 17.782 10.3702 17.6571 11.5312 17.6309ZM12.4688 22.7219V17.6309C13.684 17.6582 14.8139 17.791 15.8732 18.0062C15.6856 18.6318 15.4675 19.2195 15.2199 19.7596C14.4578 21.4224 13.4756 22.4705 12.4688 22.7219ZM17.6203 11.5312C17.5889 9.8205 17.3858 8.17397 17.0289 6.68522C18.2152 6.3712 19.4004 5.92716 20.4574 5.31408C21.8621 7.08966 22.6723 9.26841 22.7709 11.5312H17.6203ZM19.8312 4.59098C18.8874 5.11706 17.8451 5.50266 16.7875 5.78114C16.3488 4.29802 15.6373 2.64937 14.569 1.52944C16.5664 2.01909 18.3955 3.07364 19.8312 4.59098ZM9.43092 1.52944C8.36259 2.64937 7.65117 4.29806 7.21247 5.78114C6.16012 5.5042 5.11969 5.12025 4.16873 4.59098C5.60452 3.07364 7.43358 2.01909 9.43092 1.52944ZM4.16878 19.409C5.12616 18.8771 6.16134 18.4943 7.21252 18.2189C7.65122 19.7018 8.36264 21.3507 9.43097 22.4705C7.43353 21.9809 5.60452 20.9264 4.16878 19.409ZM14.569 22.4706C15.6361 21.352 16.3479 19.7048 16.7875 18.2189C17.8268 18.4916 18.8773 18.878 19.8313 19.409C18.3955 20.9264 16.5664 21.9809 14.569 22.4706Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4657">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Remote
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4662)">
                          <path
                            d="M11.9996 0C5.38349 0 0 5.38306 0 12C0 18.6169 5.38349 24 11.9996 24C18.6169 24 23.9996 18.6169 23.9996 12C23.9996 5.38306 18.6169 0 11.9996 0ZM11.9996 22.4001C6.26514 22.4001 1.59991 17.7349 1.59991 12C1.59991 6.26514 6.26557 1.59991 11.9996 1.59991C17.7349 1.59991 22.3997 6.26514 22.3997 12C22.3997 17.7349 17.7353 22.4001 11.9996 22.4001Z"
                            fill="#DD4243"
                          />
                          <path
                            d="M17.9427 11.1313H12.7997V4.33112C12.7997 3.88921 12.4415 3.53094 12 3.53094C11.559 3.53094 11.2007 3.88964 11.2007 4.33112V12.7308H17.9427C18.3841 12.7308 18.7424 12.3729 18.742 11.931C18.742 11.4896 18.3833 11.1313 17.9427 11.1313Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4662">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Full-time
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[195px] cursor-pointer px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
                <div className="text-white text-base font-normal urbanist">
                  View Details
                </div>
                <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.52858 3.52859C5.78892 3.26824 6.21103 3.26824 6.47138 3.52859L10.4714 7.52859C10.7317 7.78894 10.7317 8.21105 10.4714 8.4714L6.47138 12.4714C6.21103 12.7317 5.78892 12.7317 5.52858 12.4714C5.26823 12.2111 5.26823 11.7889 5.52858 11.5286L9.05717 8L5.52858 4.4714C5.26823 4.21105 5.26823 3.78894 5.52858 3.52859Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[0px] uiux-border-style "></div>
          </div>
          <div className="flex-col w-full justify-start items-start gap-8 flex">
            <div className="self-stretch w-full justify-between items-center inline-flex">
              <div className="w-[892px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-[32px] font-semibold urbanist">
                  Content Writer
                </div>
                <div className="justify-start items-start gap-10 inline-flex">
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4657)">
                          <path
                            d="M12 0.28125C5.53027 0.28125 0.28125 5.53031 0.28125 12C0.28125 18.4697 5.53027 23.7188 12 23.7188C18.4697 23.7188 23.7188 18.4697 23.7188 12C23.7188 5.53027 18.4697 0.28125 12 0.28125ZM20.4574 18.6859C19.4024 18.0745 18.213 17.6264 17.0289 17.3148C17.3858 15.826 17.5889 14.1795 17.6203 12.4688H22.7709C22.6723 14.7315 21.8621 16.9103 20.4574 18.6859ZM3.54267 18.6859C2.13797 16.9103 1.32773 14.7315 1.22911 12.4688H6.37969C6.41109 14.1795 6.6142 15.826 6.97111 17.3148C5.77833 17.6345 4.61944 18.0611 3.54267 18.6859ZM3.54262 5.31408C4.59389 5.92233 5.77312 6.3697 6.97111 6.68522C6.61416 8.17397 6.41109 9.8205 6.37969 11.5312H1.22911C1.32773 9.26841 2.13797 7.08966 3.54262 5.31408ZM12.4688 16.6932V12.4688H16.6827C16.6516 14.1093 16.4574 15.6832 16.1171 17.1006C15.0033 16.8686 13.7643 16.722 12.4688 16.6932ZM7.88292 17.1006C7.54261 15.6832 7.34836 14.1093 7.31728 12.4688H11.5312V16.6932C10.2512 16.7217 9.02034 16.864 7.88292 17.1006ZM11.5312 7.30683V11.5312H7.31728C7.34836 9.89067 7.54261 8.3168 7.88292 6.89944C9.02447 7.13588 10.241 7.27805 11.5312 7.30683ZM12.4688 11.5312V7.30683C13.7289 7.2787 14.9536 7.1408 16.1171 6.89944C16.4574 8.3168 16.6516 9.89067 16.6827 11.5312H12.4688ZM12.4688 6.36909V1.27814C13.4756 1.52948 14.4578 2.57761 15.2199 4.24036C15.4674 4.78045 15.6856 5.36822 15.8732 5.99377C14.751 6.22261 13.5998 6.34364 12.4688 6.36909ZM11.5312 1.27814V6.36909C10.376 6.34308 9.22453 6.21783 8.12677 5.99377C8.31441 5.36822 8.53256 4.78045 8.78011 4.24036C9.5422 2.57756 10.5244 1.52944 11.5312 1.27814ZM11.5312 17.6309V22.7219C10.5244 22.4705 9.5422 21.4224 8.78011 19.7596C8.53256 19.2195 8.31441 18.6318 8.12677 18.0062C9.23119 17.782 10.3702 17.6571 11.5312 17.6309ZM12.4688 22.7219V17.6309C13.684 17.6582 14.8139 17.791 15.8732 18.0062C15.6856 18.6318 15.4675 19.2195 15.2199 19.7596C14.4578 21.4224 13.4756 22.4705 12.4688 22.7219ZM17.6203 11.5312C17.5889 9.8205 17.3858 8.17397 17.0289 6.68522C18.2152 6.3712 19.4004 5.92716 20.4574 5.31408C21.8621 7.08966 22.6723 9.26841 22.7709 11.5312H17.6203ZM19.8312 4.59098C18.8874 5.11706 17.8451 5.50266 16.7875 5.78114C16.3488 4.29802 15.6373 2.64937 14.569 1.52944C16.5664 2.01909 18.3955 3.07364 19.8312 4.59098ZM9.43092 1.52944C8.36259 2.64937 7.65117 4.29806 7.21247 5.78114C6.16012 5.5042 5.11969 5.12025 4.16873 4.59098C5.60452 3.07364 7.43358 2.01909 9.43092 1.52944ZM4.16878 19.409C5.12616 18.8771 6.16134 18.4943 7.21252 18.2189C7.65122 19.7018 8.36264 21.3507 9.43097 22.4705C7.43353 21.9809 5.60452 20.9264 4.16878 19.409ZM14.569 22.4706C15.6361 21.352 16.3479 19.7048 16.7875 18.2189C17.8268 18.4916 18.8773 18.878 19.8313 19.409C18.3955 20.9264 16.5664 21.9809 14.569 22.4706Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4657">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Remote
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2199_4662)">
                          <path
                            d="M11.9996 0C5.38349 0 0 5.38306 0 12C0 18.6169 5.38349 24 11.9996 24C18.6169 24 23.9996 18.6169 23.9996 12C23.9996 5.38306 18.6169 0 11.9996 0ZM11.9996 22.4001C6.26514 22.4001 1.59991 17.7349 1.59991 12C1.59991 6.26514 6.26557 1.59991 11.9996 1.59991C17.7349 1.59991 22.3997 6.26514 22.3997 12C22.3997 17.7349 17.7353 22.4001 11.9996 22.4001Z"
                            fill="#DD4243"
                          />
                          <path
                            d="M17.9427 11.1313H12.7997V4.33112C12.7997 3.88921 12.4415 3.53094 12 3.53094C11.559 3.53094 11.2007 3.88964 11.2007 4.33112V12.7308H17.9427C18.3841 12.7308 18.7424 12.3729 18.742 11.931C18.742 11.4896 18.3833 11.1313 17.9427 11.1313Z"
                            fill="#DD4243"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2199_4662">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                    </div>
                    <div className="text-stone-300 text-xl font-light urbanist">
                      Full-time
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[195px] cursor-pointer px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
                <div className="text-white text-base font-normal urbanist">
                  View Details
                </div>
                <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.52858 3.52859C5.78892 3.26824 6.21103 3.26824 6.47138 3.52859L10.4714 7.52859C10.7317 7.78894 10.7317 8.21105 10.4714 8.4714L6.47138 12.4714C6.21103 12.7317 5.78892 12.7317 5.52858 12.4714C5.26823 12.2111 5.26823 11.7889 5.52858 11.5286L9.05717 8L5.52858 4.4714C5.26823 4.21105 5.26823 3.78894 5.52858 3.52859Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[0px] uiux-border-style "></div>
          </div>
        </div>
        <div className=" w-full flex-col pt-20 justify-start items-center gap-6 inline-flex">
          <div className="text-white text-[40px] font-semibold urbanist">
            Couldn’t find a role that suits you?
          </div>
          <div>
            <span className="text-stone-300 text-xl font-normal urbanist">
              Send us your resume at{" "}
            </span>
            <span className="text-red-500 text-xl cursor-pointer font-normal urbanist underline">
              hr@vadavision.com
            </span>
            <span className="text-stone-300 text-xl font-normal urbanist">
              {" "}
              and we’ll connect with you
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenRoles;
