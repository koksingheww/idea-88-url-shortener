"use client";

export default function CreateLinkButton() {
  return (
    <button
      className="btn btn-active btn-neutral"
      onClick={() => document.getElementById("create-link-modal").showModal()}
    >
      <p>Create Link</p>
      <kbd className="kbd-xs">C</kbd>
    </button>
  );
}
