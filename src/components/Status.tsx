interface IProps {
  text: string;
}

export const Status: React.FC<IProps> = ({ text }: IProps) => {
  return (
    <div>
      <div className="status">
        <span className="status-text">{text}</span>
      </div>
    </div>
  );
};
