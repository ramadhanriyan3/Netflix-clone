import { ImSpinner2 } from "react-icons/im";

const Spinner = ({ size }: { size: number }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ImSpinner2 color="white" className="animate-spin" size={size} />
      </div>
    </>
  );
};

export default Spinner;
