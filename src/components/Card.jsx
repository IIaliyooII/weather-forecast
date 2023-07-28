/* eslint-disable react/prop-types */
function Card({ children, style }) {
  return <div className={`h-fit rounded-lg shadow-xl ${style}`}>{children}</div>;
}

export default Card;
