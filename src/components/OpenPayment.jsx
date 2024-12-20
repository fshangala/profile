import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export default function OpenPayment() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: 0,
    currency: "USD",
  })

  const currencies = [
    { label: "Zambian Kwacha", value: "ZMW" },
    { label: "United States Dollar", value: "USD" },
    { label: "Euro", value: "EUR" },
    { label: "British Pound", value: "GBP" },
    { label: "Japanese Yen", value: "JPY" },
    { label: "Canadian Dollar", value: "CAD" },
    { label: "Australian Dollar", value: "AUD" },
    { label: "Swiss Franc", value: "CHF" },
    { label: "Chinese Yuan", value: "CNY" },
    { label: "Swedish Krona", value: "SEK" },
    { label: "New Zealand Dollar", value: "NZD" },
    { label: "Indian Rupees", value: "INR" }
  ]

  function getPaid() {
    LencoPay.getPaid({
      key: "pub-ea0946f26fbece764b3bdf6099577789a5d9700744937d85",
      reference: 'ref-' + Date.now(),
      email: details.email,
      amount: details.amount,
      currency: currency,
      channels: ["card"],
      customer:{
        firstName: details.firstName,
        lastName: details.lastName,
        phone: details.phone
      },
      description: "Payment for services",
      onSuccess: function(response) {
        console.log(response)
        const {txRef, transactionComplete, amount, currency, customer, paymentMethod} = response
        alert(`Payment successful: ${txRef}`)
      },
      onClose: function() {alert("Payment closed")},
      onFailure: () => alert("Payment failed")
    })
  }

  return (
    <Card title="Open Payment">
      <div>
        <div className="flex flex-column gap-4">
          <div className="flex flex-column gap-2">
            <label htmlFor="firstName">First Name</label>
            <InputText id="firstName" value={details.firstName} onChange={(e) => setDetails({...details, firstName: e.target.value})} aria-describedby="firstName-help" />
            <small id="firstName-help">Enter your first name</small>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="lastName">Last Name</label>
            <InputText id="lastName" value={details.lastName} onChange={(e) => setDetails({...details, lastName: e.target.value})} aria-describedby="lastName-help" />
            <small id="lastName-help">Enter your last name</small>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="email">Email</label>
            <InputText id="email" type="email" value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} aria-describedby="email-help" />
            <small id="email-help">Enter your email</small>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="phone">Phone</label>
            <InputText id="phone" type="tel" value={details.phone} onChange={(e) => setDetails({...details, phone: e.target.value})} aria-describedby="phone-help" />
            <small id="phone-help">Enter your phone number</small>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="amount">Amount</label>
            <InputNumber id="amount" value={details.amount} onValueChange={(e) => setDetails({...details, amount: e.value})} mode="currency" currency={details.currency} aria-describedby="amount-help" />
            <small id="amount-help">Enter the amount</small>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="currency">Currency</label>
            <Dropdown id="currency" value={details.currency} onChange={(e) => setDetails({...details, currency: e.value})} options={currencies} aria-describedby="currency-help" />
            <small id="currency-help">Enter the currency</small>
          </div>
          <div>
            <Button onClick={getPaid} label="Pay" />
          </div>
        </div>
      </div>
    </Card>
  );
}