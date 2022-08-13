import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { IoIosArrowDropleft } from "react-icons/io";

import {
  PurchaseLayout,
  PurchaseStage01,
  PurchaseStage02,
} from "components/purchase-stages";

const maxPurchaseStage = 3;

function BuyProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [purchaseStage, setPurchaseStage] = useState(1);
  const [purchaseData, setPurchaseData] = useState({});

  const handleFormSubmit = () => {
    if (purchaseStage < maxPurchaseStage) {
      setPurchaseStage((prevValue) => prevValue + 1);
    }
  };

  switch (purchaseStage) {
    case 1:
      return (
        <PurchaseLayout
          title="آدرس شما"
          buttonText="ثبت آدرس"
          backStepIcon={
            <ImCross
              className="purchase-layout-icon"
              onClick={() => navigate(`/product/${id}`)}
            />
          }
          onFormSubmited={handleFormSubmit}
        >
          <PurchaseStage01
            purchaseData={purchaseData}
            setPurchaseData={(newData) =>
              setPurchaseData((prevValue) => ({ ...prevValue, ...newData }))
            }
          />
        </PurchaseLayout>
      );
    case 2:
      return (
        <PurchaseLayout
          title="انتخاب آدرس"
          buttonText="ادامه و تایید روش ارسال"
          backStepIcon={
            <IoIosArrowDropleft
              className="purchase-layout-icon"
              size="25px"
              onClick={() => setPurchaseStage((prevValue) => prevValue - 1)}
            />
          }
          onCloseIconClicked={() =>
            setPurchaseStage((prevValue) => prevValue - 1)
          }
          onFormSubmited={handleFormSubmit}
        >
          <PurchaseStage02
            purchaseData={purchaseData}
            setPurchaseData={(newData) =>
              setPurchaseData((prevValue) => ({ ...prevValue, ...newData }))
            }
          />
        </PurchaseLayout>
      );
    default:
      return (
        <div>
          <p style={{ direction: "rtl", padding: "5px 15px" }}>
            خطا در بررسی مرحله خرید شما!{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setPurchaseStage(1)}
            >
              برگشت به مرحله اول؟
            </span>
          </p>
        </div>
      );
  }
}

export default BuyProduct;
