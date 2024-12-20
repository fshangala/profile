import { Card } from "primereact/card";
import OpenPayment from "../components/OpenPayment";

export default function Services() {
  return (
    <div className="flex flex-column gap-4">
      <Card title="Services"></Card>
      <OpenPayment />
    </div>
  )
}