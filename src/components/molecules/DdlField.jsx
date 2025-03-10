// Import Dependencies

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
  Field,
  Label as LabelWrap,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "../atoms/Label";
import { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";

export const DdlField = ({
  // Props
  by,
  disabled,
  label,
  options = [],
  placeholder = "",
  value = null,
  view,
  onChange = () => {},
}) => {
  // State
  const [query, setQuery] = useState("");
  const [selectedData, setSelectedData] = useState(value);

  // Hooks
  useEffect(() => {
    if (!isEmpty(selectedData)) onChange(selectedData);
  }, [selectedData, onChange]);

  // Methods
  const matches = () => {
    if (!isEmpty(query)) {
      return options.filter((v) => {
        return (isObject(v) ? v[view].toLowerCase() : v.toLowerCase()).includes(
          query.toLowerCase(),
        );
      });
    }
    return options;
  };

  // Event Hanlder

  // Return JSX
  return (
    <section className="w-full">
      <Field disabled={disabled}>
        <LabelWrap>
          <Label>{label}</Label>
        </LabelWrap>
        <Combobox
          value={selectedData}
          virtual={{ options: matches() }}
          by={by}
          onChange={setSelectedData}
          onClose={() => setQuery("")}
        >
          <div className="relative">
            <ComboboxInput
              className={
                "w-full rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-sm/6 bg-gray-50 "
              }
              aria-label={placeholder || "Dropdown"}
              displayValue={(o) => (isObject(o) ? o?.[view] : o)}
              onChange={($e) => setQuery($e.target.value)}
              placeholder={placeholder}
            />
            <ComboboxButton className="w-full group absolute inset-y-0 left-0 px-2.5">
              <section className="flex justify-end pr-1">
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-down"
                  className="text-sm/6"
                />
              </section>
            </ComboboxButton>
          </div>
          <ComboboxOptions
            transition
            anchor="bottom"
            className="w-[var(--input-width)] h-48 p-2 box-border rounded-xl border border-gray-300 bg-white [--anchor-gap:8px] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 shadow-lg"
          >
            {({ option: o }) => (
              <ComboboxOption
                key={isObject(o) ? o?.[by] : o}
                value={o}
                className="w-full group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100"
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-check"
                  className="invisible group-data-[selected]:visible"
                />
                <div className="text-sm/6">{isObject(o) ? o?.[view] : o}</div>
              </ComboboxOption>
            )}
          </ComboboxOptions>
        </Combobox>
      </Field>
    </section>
  );
};
