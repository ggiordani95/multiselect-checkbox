import { useState } from "react";
import ReactDOM from "react-dom";

import MultiSelect from "./MultiSelect/MultiSelect";

export type Option = {
  value: number | string;
  label: string;
};

const analistGroup = [
  { value: "ANALISTA DE PROGRAMAÇÃO", label: "ANALISTA DE PROGRAMAÇÃO" },
  { value: "ANALISTA DE TI", label: "ANALISTA DE TI" },
  { value: "ANALISTA DE TI II", label: "ANALISTA DE TI II" },
];
const portGroup = [
  { value: "PORTEIRO I", label: "PORTEIRO I" },
  { value: "PORTEIRO III", label: "PORTEIRO II" },
];

const options = [
  { value: "ANALISTA (TODOS)", label: "ANALISTA (TODOS)", group: analistGroup },
  { value: "ANALISTA DE PROGRAMAÇÃO", label: "ANALISTA DE PROGRAMAÇÃO" },
  { value: "ANALISTA DE TI", label: "ANALISTA DE TI" },
  { value: "ANALISTA DE TI II", label: "ANALISTA DE TI II" },
  { value: "PORTEIRO (TODOS)", label: "PORTEIRO (TODOS)", group: portGroup },
  { value: "PORTEIRO I", label: "PORTEIRO I" },
  { value: "PORTEIRO III", label: "PORTEIRO II" },
];

export default function ReactMultiSelect() {
  const [optionSelected, setSelected] = useState<Option[] | null>();
  const handleChange = (selected: Option[]) => {
    setSelected(selected);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>MultiSelect example</h1>
      <div style={{ width: "100%", flex: 1 }}>
        <MultiSelect
          key="example_id"
          options={options}
          onChange={handleChange}
          value={optionSelected}
          isSelectAll={true}
          menuPlacement={"bottom"}
        />
      </div>
    </div>
  );
}
