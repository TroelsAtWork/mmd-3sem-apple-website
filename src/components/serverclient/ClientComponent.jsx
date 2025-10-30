const ClientComponent = ({ data }) => {
  return (
    <ul>
      {data.map((blogs) => {
        return <li>{blogs.title}</li>;
      })}
    </ul>
  );
};

export default ClientComponent;
