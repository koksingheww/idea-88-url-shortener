export default function CreateLinkButton() {
  function handleOpenModal() {
    const modal = document.getElementById("create-link-modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }

  return (
    <button className="btn btn-active btn-neutral" onClick={handleOpenModal}>
      <p>Create Link</p>
      <kbd className="kbd-xs">C</kbd>
    </button>
  );
}
