import { Tab } from "@headlessui/react";
import { useData } from "../context/dataContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RightBar() {
  const postCategory = ["Recent", "Trending"];
  const { setCurrCategory } = useData();

  const handleCategory = (e) => {
    setCurrCategory(e.target.name);
  };

  return (
    <aside>
      <div className="flex flex-col pt-4 gap-3 border-l border-l-gray-300 fixed top-[52px] bottom-0 right-0 px-4 w-[16rem]">
        <p className="text-xl font-bold font-Libre">Sort By:</p>

        <Tab.Group className="mb-2">
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
