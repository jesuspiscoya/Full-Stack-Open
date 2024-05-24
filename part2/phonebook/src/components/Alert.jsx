export const Alert = ({ alert }) => {
  if (alert !== null) {
    return <div className={`alert ${alert.type}`}>{alert.message}</div>;
  }
};
