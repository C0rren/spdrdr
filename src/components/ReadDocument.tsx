interface ReadDocumentProps {
    text: string;
}

const ReadDocument = ({text} : ReadDocumentProps) => {
    return ( 
    <div className="document" dangerouslySetInnerHTML={{
        __html: text.split(' ').map((word) => {
            return '<b>' + word.substring(0,Math.ceil(word.length/2)) + '</b>' + word.substring(Math.ceil(word.length/2), word.length);
        }) .join(' ')}}>
    </div> 
  );
}

export default ReadDocument;