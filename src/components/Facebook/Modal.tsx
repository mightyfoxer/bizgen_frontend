import { FC, ReactNode, useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts/ModalProvider";
import {
  CloseIcon,
  CrownIconBold,
  DocumentUploadIconBold,
  ImageIconTwoTone,
  MagicIconFill,
  MagicTwoTone,
  SingleSpin,
} from "../SvgIcons";
import { ButtonGradient, ButtonGradientYellow } from "../Widget";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { ReactSVG } from "react-svg";

interface ModalProps {
  children?: ReactNode;
}

export const FacebookModals: FC<ModalProps> = ({ children }) => {
  return <>{children}</>;
};

interface FileUploadProps {
  handleFileChange: (files: File[]) => void;
}

export const FacebookImageUploadModal: FC<FileUploadProps> = ({
  handleFileChange,
}) => {
  const { acceptedFiles, getInputProps } = useDropzone();
  const { closeFacebookImageUploadModal, openGenerateImageModal } = useModal();

  useEffect(() => {
    handleFileChange(acceptedFiles);
    if (acceptedFiles.length !== 0) {
      closeFacebookImageUploadModal();
    }
  }, [acceptedFiles]);

  return (
    <Modal>
      <div className="w-[780px] py-9 px-6 bg-white rounded-[10px]">
        <div className="flex justify-end items-center">
          <button onClick={closeFacebookImageUploadModal}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#C5E9FF] p-2 rounded-md">
            <ImageIconTwoTone />
          </div>
          <h2 className="text-primary-200 font-aeonik font-medium text-h5 leading-h5 mt-2">{`Don't shy to standout!`}</h2>
          <p className="text-l leading-l font-jakarta text-primary-100 text-center mt-1 px-10">
            Use images sized <span className="text-primary-300">1200x628</span>{" "}
            pixels ideally, minimum{" "}
            <span className="text-primary-300">200x200 pixels</span>, or{" "}
            <span className="text-primary-300">600x315</span> for larger link
            posts,{" "}
            <span className="text-primary-300">
              with a maximum size of 8 MB
            </span>
            .
          </p>
          <div className="w-full my-6">
            <label htmlFor="image-upload" className="group">
              <div className="border-dashed border border-secondary-600 rounded-md bg-white min-h-[480px] flex items-center justify-center flex-col group-hover:border-primary-300">
                <DocumentUploadIconBold />
                <p className="text-secondary-600 font-semibold text-l leading-l text-center max-w-[460px] mt-2.5 font-jakarta">
                  Drag and drop files in (JPG, PNG, GIF, SVG, GLTF, GLB, MOV, or
                  MP4 format.) or{" "}
                  <span className="text-primary-300">upload here</span>
                </p>
              </div>
            </label>
            <input id="image-upload" className="hidden" {...getInputProps()} />
          </div>
          <button className="py-3 rounded-lg w-full bg-primary-300 tex-white text-2xl font-aeonik text-white">
            Upload
          </button>
          <button
            className="py-3 rounded-lg w-full tex-white text-2xl font-aeonik text-white mt-2 relative overflow-hidden group"
            onClick={() => {
              closeFacebookImageUploadModal();
              openGenerateImageModal();
            }}
          >
            <ButtonGradientYellow isAnimation />
            <div className="flex items-center justify-center gap-2.5 relative">
              Generate Image
              <CrownIconBold />
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const GenerateImageModal = () => {
  const { closeGenerateImageModal } = useModal();
  const [loading, setLoading] = useState(false);

  const imageGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const selectImages = () => {};

  return (
    <Modal>
      <div className="max-w-[780px] rounded-[10px] bg-white py-9 px-6">
        <div className="flex justify-end items-center">
          <button onClick={closeGenerateImageModal}>
            <CloseIcon />
          </button>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#C5E9FF] p-2 rounded-md">
            <ImageIconTwoTone />
          </div>
          <h2 className="text-primary-200 font-aeonik font-medium text-h5 leading-h5 mt-2">{`It's time to create like a magic!`}</h2>
          <p className="text-l leading-l font-jakarta text-primary-100 text-center mt-1 px-10">
            Use images sized <span className="text-primary-300">1200x628</span>{" "}
            pixels ideally, minimum{" "}
            <span className="text-primary-300">200x200 pixels</span>, or{" "}
            <span className="text-primary-300">600x315</span> for larger link
            posts,{" "}
            <span className="text-primary-300">
              with a maximum size of 8 MB
            </span>
            .
          </p>
          <input
            className="rounded-md border border-secondary-600 px-4 py-2.5 font-jakarta font-semibold text-l leading-l w-full mt-2"
            placeholder="Place your perfect prompt here..."
          />
          <button
            className="py-3 rounded-lg w-full tex-white text-2xl font-aeonik text-white mt-2 relative overflow-hidden group"
            onClick={imageGenerate}
          >
            <ButtonGradient isAnimation />
            <div className="flex items-center justify-center gap-2.5 relative">
              Generate Image
              {loading ? (
                <SingleSpin className="animate-spin" />
              ) : (
                <MagicTwoTone />
              )}
            </div>
          </button>
          <div className="py-[18px] px-5 mt-6 border rounded-[10px] border-secondary-600 w-full">
            <h5 className="flex items-center text-l leading-l font-bold text-primary-300 font-jakarta gap-2">
              Cool Nike Shoes{" "}
              <span>
                <MagicIconFill />{" "}
              </span>
            </h5>
            {loading ? (
              <div className="grid grid-cols-6 gap-[18px] mt-6">
                <div className="animate-pulse aspect-square bg-skeleton rounded-lg" />
                <div className="animate-pulse aspect-square bg-skeleton rounded-lg" />
                <div className="animate-pulse aspect-square bg-skeleton rounded-lg" />
                <div className="animate-pulse aspect-square bg-skeleton rounded-lg" />
                <div className="animate-pulse aspect-square bg-skeleton rounded-lg" />
                <div className="animate-pulse aspect-square bg-skeleton rounded-lg" />
              </div>
            ) : (
              <div className="grid grid-cols-6 gap-[18px] mt-6">
                <div className="aspect-square rounded-lg overflow-hidden border border-secondary-600 relative">
                  <Image src={"/images/generated/1.png"} fill alt="" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-secondary-600 relative">
                  <Image src={"/images/generated/2.png"} fill alt="" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-secondary-600 relative">
                  <Image src={"/images/generated/3.png"} fill alt="" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-secondary-600 relative">
                  <Image src={"/images/generated/4.png"} fill alt="" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-secondary-600 relative">
                  <Image src={"/images/generated/5.png"} fill alt="" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-secondary-600 relative">
                  <Image src={"/images/generated/6.png"} fill alt="" />
                </div>
              </div>
            )}
          </div>
          <div className="mt-2.5 flex items-center justify-end gap-2.5 w-full">
            <button className="px-[18px] py-3 font-aeonik text-2xl font-medium text-secondary-600 border border-secondary-600 capitalize rounded-lg">
              refresh
            </button>
            <button
              className="px-[18px] py-3 font-aeonik text-2xl font-medium text-white border border-primary-300 disabled:border-secondary-600 capitalize rounded-lg disabled:bg-secondary-600 bg-primary-300"
              onClick={() => closeGenerateImageModal()}
            >
              Save image
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const UpgradeMiniModal = () => {
  const { closeUpgradeMiniModal } = useModal();

  return (
    <Modal>
      <div className="w-[calc(100%-32px)] xl:w-[1180px] bg-white relative grid grid-cols-2 overflow-hidden rounded-3xl mx-4 xl:mx-0">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-full">
            <Image
              src="/images/star-blue-bg.svg"
              fill
              alt=""
              objectFit="cover"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[281px] h-[271px]">
            <Image
              src="/images/logo@colered.png"
              fill
              alt=""
              objectFit="cover"
            />
          </div>
          <button
            className="absolute left-4 top-4"
            onClick={closeUpgradeMiniModal}
          >
            <CloseIcon color="white" />
          </button>
        </div>
        <div className="p-9 bg-white">
          <h2 className="text-h4 leading-h4 font-bold font-aeonik tracking-[-0.72px] text-primary-100 max-w-[450px]">
            Upgrade to PRO to create your{" "}
            <span className="text-primary-300">Branding Guide</span>
          </h2>
          <p className="text-l leading-l text-primary-100 font-jakarta mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="grid grid-cols-2 gap-y-8 mt-10">
            <div className="flex items-center gap-2 text-2xl font-medium font-aeonik text-primary-100">
              <ReactSVG src="/icons/briefcase@gradient.svg" />
              Unlimited Business
            </div>
            <div className="flex items-center gap-2 text-2xl font-medium font-aeonik text-primary-100">
              <ReactSVG src="/icons/designtools@gradient.svg" />
              Customize Brand
            </div>
            <div className="flex items-center gap-2 text-2xl font-medium font-aeonik text-primary-100">
              <ReactSVG src="/icons/users@gradient.svg" />
              Create Your Team
            </div>
            <div className="flex items-center gap-2 text-2xl font-medium font-aeonik text-primary-100">
              <ReactSVG src="/icons/magicpen@gradient.svg" />
              AI Powered Tools
            </div>
          </div>
          <button className="py-6 w-full relative font-jakarta text-l leading-l text-white group rounded-lg mt-10 overflow-hidden">
            <ButtonGradient />
            <span className="relative font-semibold">Upgrade Your Plan</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
