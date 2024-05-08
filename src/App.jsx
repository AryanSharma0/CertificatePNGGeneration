import { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./index.css";
function App() {
  const certificateWrapper = useRef(null);
  const [formData, setFormData] = useState({
    name: "Name",
    course: "Course Name",
    completion_date: "01/01/2003",
  });
  const formDataChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className=" ">
      <div className=" flex space-y-2 flex-col">
        <div>
          <h1>ACM Certificates</h1>
          <p>Please enter your name.</p>
        </div>
        <div className=" space-x-4">
          <label htmlFor="">Student Name</label>
          <input
            type="text"
            placeholder=""
            name="name"
            className=" p-2 bg-slate-100 text-slate-700 rounded-md "
            value={formData.name}
            onChange={formDataChange}
          />
        </div>
        <div className=" space-x-4">
          <label htmlFor="">Student Name</label>
          <input
            type="text"
            placeholder="Please enter your course name..."
            name="course"
            className=" p-2 bg-slate-100 text-slate-700 rounded-md "
            value={formData.course}
            onChange={formDataChange}
          />
        </div>
        <div className=" space-x-4">
          <label htmlFor="">Student Name</label>
          <input
            type="text"
            placeholder="Please enter your completion date..."
            name="completion_date"
            className=" p-2 bg-slate-100 text-slate-700 rounded-md "
            value={formData.completion_date}
            onChange={formDataChange}
          />
        </div>

        <button
          className=" bg-orange-600 text-white hover:font-bold active:scale-95 hover:bg-orange-800 p-3 w-48 ml-20 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            exportComponentAsPNG(certificateWrapper, {
              html2CanvasOptions: { backgroundColor: null },
            });
          }}
        >
          Download
        </button>
      </div>

      <div className=" mt-20 h-fit w-fit  relative" ref={certificateWrapper}>
        <div>
          <img
            src="../src/assets/Screenshot from 2024-05-08 19-06-54.png"
            alt="Certificate"
          />
          <p className=" absolute h-full w-full   top-0  text-[20px] font-bold text-slate-900  ">
            <div className="flex flex-col -mt-12 h-full justify-center font-sans items-center">
              <h4 className="text-5xl text-yellow-500  ">{formData.name}</h4>
              <p className="w-[55%] pt-6 text-center text-[18px]">
                For successfully completing the {formData.course} course on{" "}
                {formData.completion_date}.
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
