"use client";

import { useFormStatus } from "react-dom";
import React, { useCallback, useState } from "react";

import { createLink } from "@/lib/actions";
import Logo from "../logo";

import { DOMAIN } from "@/lib/constants";
import Random from "../ui/Random";
import LoadingSpinner from "../ui/LoadingSpinner";
import { set } from "zod";

export default function CreateLinkModal() {
  const [destinationUrl, setDestinationUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [generatingKey, setGeneratingKey] = useState(false);
  const [urlCode, setUrlCode] = useState("");
  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="btn btn-block btn-neutral"
      >
        {pending && <LoadingSpinner />}
        Create Link
      </button>
    );
  }

  const generateRandomKey = async () => {
    setGeneratingKey(true);
    const res = await fetch("api/url-code");
    const { data } = await res.json();
    console.log(data);

    setShortLink(`${DOMAIN}/${data}`);
    setUrlCode(data);
    setGeneratingKey(false);
  };

  // Update both destinationUrl and shortLink states when the destination URL changes
  const handleDestinationUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const originalUrl = event.target.value;
    setDestinationUrl(originalUrl);
    if (!destinationUrl) {
      generateRandomKey();
    }
  };

  // Update only shortLink state when the short link input changes
  const handleShortLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShortLink(event.target.value);
    setUrlCode(event.target.value);
  };

  function handleCloseModal() {
    const modal = document.getElementById("create-link-modal");
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  }

  const createLinkWithUrlCode = createLink.bind(null, urlCode);

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
              action={createLinkWithUrlCode}
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
                      value={destinationUrl}
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
                        type="button"
                        onClick={generateRandomKey}
                        className="label-text-alt flex items-center space-x-2 text-sm text-gray-500 transition-all duration-75 hover:text-black active:scale-95"
                      >
                        {generatingKey ? <LoadingSpinner /> : <Random />}
                        <p>{generatingKey ? "Generating" : "Randomize"}</p>
                      </button>
                    </div>
                    <input
                      id="short-link"
                      name="short-link"
                      type="url"
                      placeholder="servicerocket"
                      className="input input-bordered w-full max-w-xs"
                      value={shortLink}
                      onChange={handleShortLinkChange}
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
