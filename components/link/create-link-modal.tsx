import { useFormStatus } from "react-dom";
import React, { useState } from "react";

import { createLink } from "@/lib/actions";
import { getRandomUrlCode } from "@/lib/utils";
import Logo from "../logo";

export default async function CreateLinkModal() {
  // const [shortLink, setShortLink] = useState("");
  // const handleDestinationUrlChange = async () => {
  //   const urlCode = await getRandomUrlCode();
  //   setShortLink(urlCode);
  // };
  function Submit() {
    const { pending } = useFormStatus();

    const loadingSpinner = <span className="loading loading-spinner"></span>;

    return (
      <button
        type="submit"
        disabled={pending}
        className="btn btn-block btn-neutral"
      >
        {pending && loadingSpinner}
        Create Link
      </button>
    );
  }

  function handleCloseModal() {
    const modal = document.getElementById("create-link-modal");
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  }

  return (
    <dialog id="create-link-modal" className="modal">
      <div className="modal-box w-full max-w-7xl h-full max-y-7xl">
        <div className="scrollbar-hide grid max-h-[90vh] w-full divide-x divide-gray-100 overflow-auto md:grid-cols-2 md:overflow-hidden">
          <button
            onClick={handleCloseModal}
            className="group absolute right-0 top-0 z-20 m-3 hidden rounded-full p-2 text-gray-500 transition-all duration-75 hover:bg-gray-100 focus:outline-none active:bg-gray-200 md:block"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="scrollbar-hide rounded-l-2xl md:max-h-[90vh] md:overflow-auto">
            <div className="z-10 flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 pb-8 pt-8 transition-all md:sticky md:top-0 md:px-16">
              <Logo />
              <h3 className="max-w-sm truncate text-lg font-medium">
                Create a new link
              </h3>
            </div>
            <form
              action={createLink}
              onSubmit={handleCloseModal}
              className="grid gap-6 bg-gray-50 pt-8"
            >
              <div className="grid gap-6 px-4 md:px-16">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-medium text-gray-700">
                        Destination URL
                      </span>
                    </div>
                    <input
                      id="destination-url"
                      name="destination-url"
                      type="url"
                      placeholder="https://www.servicerocket.com/"
                      className="input input-bordered w-full max-w-xs"
                      required
                      onChange={handleDestinationUrlChange}
                    />
                    <p aria-live="polite" className="sr-only">
                      {/* {state?.message} */}
                    </p>
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-medium text-gray-700">
                        Short Link
                      </span>
                      <button
                        onClick={() => console.log("randomize")}
                        className="label-text-alt flex items-center space-x-2 text-sm text-gray-500 transition-all duration-75 hover:text-black active:scale-95"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.35355 1.85355C3.54882 1.65829 3.54882 1.34171 3.35355 1.14645C3.15829 0.951184 2.84171 0.951184 2.64645 1.14645L0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L2.64645 5.85355C2.84171 6.04882 3.15829 6.04882 3.35355 5.85355C3.54882 5.65829 3.54882 5.34171 3.35355 5.14645L2.20711 4H9.5C11.433 4 13 5.567 13 7.5C13 7.77614 13.2239 8 13.5 8C13.7761 8 14 7.77614 14 7.5C14 5.01472 11.9853 3 9.5 3H2.20711L3.35355 1.85355ZM2 7.5C2 7.22386 1.77614 7 1.5 7C1.22386 7 1 7.22386 1 7.5C1 9.98528 3.01472 12 5.5 12H12.7929L11.6464 13.1464C11.4512 13.3417 11.4512 13.6583 11.6464 13.8536C11.8417 14.0488 12.1583 14.0488 12.3536 13.8536L14.3536 11.8536C14.5488 11.6583 14.5488 11.3417 14.3536 11.1464L12.3536 9.14645C12.1583 8.95118 11.8417 8.95118 11.6464 9.14645C11.4512 9.34171 11.4512 9.65829 11.6464 9.85355L12.7929 11H5.5C3.567 11 2 9.433 2 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p>Randomize</p>
                      </button>
                    </div>
                    <input
                      id="short-link"
                      name="short-link"
                      type="url"
                      placeholder="servicerocket"
                      className="input input-bordered w-full max-w-xs"
                      value={shortLink}
                    />
                  </label>
                </div>
              </div>
              <div className="relative pb-3 pt-5">
                <div className="absolute inset-0 flex items-center px-4 md:px-16">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gray-50 px-2 text-sm text-gray-500">
                    Optional
                  </span>
                </div>
              </div>
              <div className=" z-10 bg-gray-50 px-4 py-8 transition-all md:sticky  md:bottom-0 md:px-16">
                <Submit />
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}
