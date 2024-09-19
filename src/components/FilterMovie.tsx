"use client";
import type { Genre } from "@/typescript";
import { useMemo } from "react";
import Select from "react-select";

const FilterMovie = ({ genres }: { genres: Genre[] }): React.JSX.Element => {
  const genreOptions = useMemo(
    () => genres.map((g) => ({ value: g.id, label: g.name })),
    [genres],
  );

  return (
    <aside className="p-4 h-auto">
      <h2 className="text-lg font-semibold">Filter Options</h2>

      <input
        type="text"
        placeholder="Search genres..."
        className="border rounded px-2 py-1 w-full mb-4"
      />

      <Select
        isMulti
        options={genreOptions}
        className="basic-single mb-4"
        classNamePrefix="select"
        inputId="react-select-id"
      />
    </aside>
  );
};

export default FilterMovie;
