import { useState } from "react";
import { createPortal } from "react-dom";

const ImageModel = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt="thumbnail"
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      />

      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
          >
            <img
              src={src}
              alt="full"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
            />
          </div>,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default ImageModel;
