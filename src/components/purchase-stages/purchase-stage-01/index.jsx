import "./index.scss";
import { MenuItem, TextField } from "@mui/material";
import {
  selectTextFieldsStyles,
  textFieldsStyles,
} from "./purchaseStageStyles";

function PurchaseStage01({ purchaseData, setPurchaseData }) {
  return (
    <div style={{ width: "100%" }}>
      <TextField
        fullWidth
        onChange={(e) => setPurchaseData({ name: e.target.value })}
        value={purchaseData.name || ""}
        label="نام‌و‌نام‌خانوادگی گیرنده سفارش"
        required
        helperText="همخوان با کارت ملی"
        sx={textFieldsStyles}
      />
      <h5 className="rtl-dir purchase-label">
        شهر و استان محل سکونت خود را وارد کنید
      </h5>
      <TextField
        select
        label="استان"
        fullWidth
        onChange={(e) => setPurchaseData({ state: e.target.value })}
        value={purchaseData.state || ""}
        required
        sx={selectTextFieldsStyles}
      >
        <MenuItem key={""} value={"etst"}>
          test
        </MenuItem>
      </TextField>
      <TextField
        select
        label="شهر"
        fullWidth
        onChange={(e) => setPurchaseData({ city: e.target.value })}
        value={purchaseData.city || ""}
        required
        sx={selectTextFieldsStyles}
      >
        <MenuItem key={""} value={"etst"}>
          test
        </MenuItem>
      </TextField>
      <h5 className="rtl-dir purchase-label">نشانی دقیق پستی</h5>

      <TextField
        fullWidth
        onChange={(e) => setPurchaseData({ address: e.target.value })}
        value={purchaseData.address || ""}
        multiline
        rows={2}
        label="نشانی"
        required
        helperText="۲۳۰ کاراکتر"
        sx={selectTextFieldsStyles}
      />
      <h5 className="rtl-dir purchase-label">کد پستی ده رقمی</h5>

      <TextField
        fullWidth
        onChange={(e) => setPurchaseData({ postal_code: e.target.value })}
        value={purchaseData.postal_code || ""}
        multiline
        label="کد پستی"
        required
        sx={selectTextFieldsStyles}
      />
    </div>
  );
}

export default PurchaseStage01;
