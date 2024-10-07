import { FormFieldProps } from "@/types/form";

function FormField({
  type,
  name,
  register,
  error,
  valueAsNumber,
  placeholder,
}: FormFieldProps) {
  return (
    <>
      <input
        className="p-2 text-black bg-white border border-black rounded-lg"
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        autoComplete="on"
      />
      {error ? (
        <span className="w-full h-2 text-xs pl-2 mb-3 text-red-500">
          {error.message}!
        </span>
      ) : (
        <span className="w-full h-2 text-xs text-red-600 pl-2 mb-3"></span>
      )}
    </>
  );
}
export default FormField;
