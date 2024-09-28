// import css from "./Option.module.css";

// function Options({ options, setter, total, reset }) {
//   return (
//     <div className={css.container}>
//       <button onClick={() => setter(options[0])} className={css.button}>
//         {options[0]}
//       </button>
//       <button onClick={() => setter(options[1])} className={css.button}>
//         {options[1]}
//       </button>
//       <button onClick={() => setter(options[2])} className={css.button}>
//         {options[2]}
//       </button>
//       {total > 0 && (
//         <button onClick={reset} className={css.button}>
//           Reset
//         </button>
//       )}
//     </div>
//   );
// }

// export default Options;



import { useState } from "react";
import css from "./Option.module.css";
import Modal from "../Modal/Modal"; 

function Options({ options, setter, total, reset }) {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    reset(); 
    closeModal(); 
  };

  return (
    <div className={css.container}>
      <button onClick={() => setter(options[0])} className={css.button}>
        {options[0]}
      </button>
      <button onClick={() => setter(options[1])} className={css.button}>
        {options[1]}
      </button>
      <button onClick={() => setter(options[2])} className={css.button}>
        {options[2]}
      </button>
      {total > 0 && (
        <button onClick={openModal} className={css.button}>
          Reset
        </button>
      )}

     
      {isModalOpen && <Modal onCloseModal={closeModal} onReset={handleReset} />}
    </div>
  );
}

export default Options;