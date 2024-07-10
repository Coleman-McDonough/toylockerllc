const OfferList = ({
  text,
  status,
  price,
  isMonthly,
}: {
  text: string;
  status: "active" | "inactive";
  price: string;
  isMonthly: boolean;
}) => {
  return (
    <div className="mb-3 flex items-center">
      <p className="m-0 text-base font-medium text-body-color">{text}</p>
      <p className="m-0 ml-auto text-base font-medium text-body-color">
        {!isMonthly ? `$${price} / year` : `$${price} / month`}
      </p>
    </div>
  );
};

export default OfferList;
