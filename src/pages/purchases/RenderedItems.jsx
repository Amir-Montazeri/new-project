import { PurchaseItem } from "components";

const RenderedItems = ({ items }) =>
  items.map((item) => {
    return (
      <PurchaseItem
        key={item.id}
        picUrl={item.picUrl}
        title={item.title}
        count={item.count}
        payStatus={item.payStatus}
        price={item.price}
      />
    );
  });

export default RenderedItems;
