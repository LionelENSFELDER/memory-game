import Lottie from "lottie-react";
import partyAnimation from "../assets/lotti/party.json";

interface ModalProps {
  isHidden: boolean;
}

const Modal = ({ isHidden }: ModalProps) => {
  const isModalHidden = isHidden ? "hidden" : "";
  return (
    <div
      id="popup-modal"
      tabIndex={isModalHidden ? -1 : 99}
      className={`${isModalHidden} flex flex-col justify-start items-center pt-36 overflow-y-auto overflow-x-hidden fixed margin-auto z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="bg-black bg-opacity-50 backdrop-blur-sm relative p-4 w-full max-w-md max-h-full margin-auto">
        <div className="relative bg-transparent rounded-lg shadow">
          <div className="flex flex-col justify-center items-center gap-5 p-4 md:p-5 text-center">
            <Lottie animationData={partyAnimation} />
            <h1 className="mb-5 text-2xl font-normal text-gray-500 dark:text-white">
              Bravo tu as gagné !
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
