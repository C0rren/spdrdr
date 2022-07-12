interface ReadDocumentProps {
  text: StringObject[];
}

type StringObject = {
  text: string;
  classes: string[];
};

const ReadDocument = ({ text }: ReadDocumentProps) => {
  return (
    <div className="document">
      {text.map((obj) => {
        return <span className={obj.classes.join(" ")}>{obj.text}</span>;
      })}
    </div>
  );
};

export default ReadDocument;
