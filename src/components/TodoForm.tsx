import { UseFormRegister } from "react-hook-form";
import { Button } from "./Button";

interface TodoFormProps {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<{ title: string }>;
  isLoading: boolean;
  isSuccess: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({
  register,
  onSubmit,
  isLoading,
  isSuccess,
}) => {
  return (
    <div className="bg-blue-50 border border-gray-300 p-3 rounded-lg">
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-lg font-medium text-gray-500"
          >
            Title
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="title"
            {...register("title")}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm indent-1 text-blue-500">
              {isLoading ? "Loading..." : ""}
            </p>
            <p className="text-sm indent-1 text-green-500">
              {isSuccess ? "Saved!" : ""}
            </p>
          </div>
          <Button disabled={isLoading} type="submit" variant="primary">
            + Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
