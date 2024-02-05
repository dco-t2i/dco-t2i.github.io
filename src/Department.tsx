import { DepartmentInfo } from "./types";

interface Props {
  departments: DepartmentInfo[];
}

const Department = ({ departments }: Props) => (
  <div className="py-1 pt-5">
    {departments.map((department, index) => (
      <span className="relative p-4" key={index}>
        <span className="text-xl font-normal text-#666666">
          {department.name}
        </span>
        <span className="font-normal text-sm absolute top-3 left-2 tracking-tight text-#666666">
          {department.ref}
        </span>
      </span>
    ))}
  </div>
);

export default Department;
