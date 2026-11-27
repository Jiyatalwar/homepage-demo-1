/* eslint-disable react/prop-types */
const ProcessCard = ({
  processImg,
  boxNumber1,
  processTitle,
  boxShape,
  processDesc,
}) => {
  return (
    <div className="group relative h-full text-center">
      <div className="inline-block m-auto relative z-10 before:absolute before:-top-[13px] before:-left-[13px] before:w-[242px] before:h-[242px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
        <img src={processImg} draggable="false" />
        {boxShape && (
          <img
            src={boxShape}
            draggable="false"
            className="absolute top-1/2 z-20 hidden h-10 w-20 -translate-y-1/2 -right-[48px] object-contain xl:block 2xl:-right-[62px]"
          />
        )}
        <h6 className="w-[48px] h-[48px] rounded-full bg-PrimaryColor-0 text-white font-Rajdhani font-medium text-[22px] flex justify-center items-center absolute top-0 left-0">
          {boxNumber1}
        </h6>
      </div>
      <h5 className="font-Rajdhani font-semibold text-white text-2xl mt-9 mb-4">
        {processTitle}
      </h5>
      <p className="font-Nunito text-TextColor-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;
