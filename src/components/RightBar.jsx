import { Tab } from "@headlessui/react";
import { useData } from "../context/DataContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RightBar() {
  const postCategory = ["Recent", "Trending"];
  const { setCurrCategory } = useData();

  const handleCategory = (e) => {
    setCurrCategory((value) => !value);
  };

  return (
    <aside className="h-full border-l border-l-gray-300">
      <div className="fixed top-[68px] bottom-0 right-0 px-4 w-[16rem]">
        <p className="text-xl font-bold font-Libre">Sort By:</p>

        <Tab.Group className="my-2">
          <Tab.List className="flex space-x-1 rounded bg-violet-600 p-1">
            {postCategory.map((category) => (
              <Tab
                as="button"
                key={category}
                onClick={handleCategory}
                name={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-md py-2.5 text-sm font-bold leading-5 text-violet-700",
                    "focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-white hover:bg-slate-400/40 hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </aside>
  );
}
