import React from "react";
import * as selector from "../../data/rootSelector";
import "./modal.css";
import { useSelector } from "react-redux";

const LoadingSpinModal: React.FC = () => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const open: any = useSelector(selector.common.loadingStatus);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="absolute top-1/2 left-1/2 z-10">
          <div
            className="border-dashed animate-spin inline-block w-8 h-8 border-4 border-gray-700  rounded-full"
            role="status"
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingSpinModal;
