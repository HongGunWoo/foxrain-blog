export default function Projects() {
  return (
    <>
      {' '}
      <div className=" static bg-gray-400">static</div>
      <div className=" sticky top-48 bg-gray-400">sticky</div>
      <div className=" fixed bg-gray-400">fixed</div>
      {Array.from({ length: 100 }).map((_, i) => (
        <br key={i} />
      ))}
    </>
  );
}
