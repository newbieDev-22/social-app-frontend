export default function Avatar({ name }) {
  return (
    <div className="w-1/6 flex justify-center items-center">
      <div className="text-xl bg-sky-400 text-white rounded-full w-10 h-10 flex justify-center items-center">
        {name[0]?.toUpperCase()}
      </div>
    </div>
  );
}
