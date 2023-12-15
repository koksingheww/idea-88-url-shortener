import DisplayLink from "@/components/link/display-link";
import FilterLink from "@/components/link/filter-link";
import SortLink from "@/components/link/sort-link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
      <div className="my-5 flex h-10 w-full justify-center lg:justify-start">
        <SortLink />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-7">
        <DisplayLink />
        <FilterLink />
      </div>
    </div>
  );
}
