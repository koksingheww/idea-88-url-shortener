import EmptyState from "./empty-state";
import Footer from "./footer-link";
import LinkList from "./link-list";

export default function DisplayLink() {
  const isEmpty = false;
  return (
    <div className="col-span-1 auto-rows-min grid-cols-1 lg:col-span-5">
      <ul className="grid min-h-[66.5vh] auto-rows-min gap-3">
        {isEmpty ? (
          <EmptyState />
        ) : (
          <>
            <LinkList />
            <Footer />
          </>
        )}
      </ul>
    </div>
  );
}
