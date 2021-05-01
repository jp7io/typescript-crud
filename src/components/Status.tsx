interface IProps {
  text: string;
}

export const Status: React.FC<IProps> = ({ text }) => {
  return (
    <div className="status">
      <span className="status-text">{text}</span>
    </div>
  );
};
