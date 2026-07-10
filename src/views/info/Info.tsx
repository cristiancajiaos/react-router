import { useParams } from "react-router-dom";

export default function Info() {
  const { firstName } = useParams();
  return (
    <section className="info">
      <h1>Hello, {firstName}!</h1>
    </section>
  );
};