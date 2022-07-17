import FactorContainer from "./RenderedFactors";
import { items } from "./sampleData";

function FinancialBody() {
  return items.map((item) => (
    <FactorContainer
      key={item?.code}
      status={item?.status}
      statusMsg={item?.statusMsg}
      day={item?.day}
      month={item?.month}
      year={item?.year}
      code={item?.code}
      price={item?.price}
    />
  ));
}

export default FinancialBody;
