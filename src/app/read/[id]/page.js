export default async function Read(props) {
  // Server component : data read & show
  const resp = await fetch(process.env.API_URL + `topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
