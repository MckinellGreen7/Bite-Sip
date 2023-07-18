const Box = ({name, image}) => {
  return (
    <div className="relative hover:scale-110 duration-500 shadow-lg shadow-stone-700 ">
      <img
        src={image}
        alt={name}
        className="rounded-lg z-[-1] w-full h-full object-cover"
      />
      <div className="bg-black/40 absolute w-full h-full top-0 flex items-center justify-center rounded-lg">
        <p className="text-white font-bold md:text-3xl text-4xl z-[0] absolute">{name}</p>
      </div>
    </div>
  );
};
export default Box;
