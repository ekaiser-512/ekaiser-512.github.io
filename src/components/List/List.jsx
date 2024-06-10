const List = ({href, name}) => {
    console.log(name);
    return (
      <li>
        <a href={href}>{name}</a>
      </li>
    );
  };
  
  export default List;