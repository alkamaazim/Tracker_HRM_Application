const DefaultCard = ({ children }) => {
  return (
    <div className="defaultCard ">
      <img
          src="/images/landing-bg.png"
          alt="Background Overlay"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        />
      {children}
    </div>
  );
};

export default DefaultCard;
