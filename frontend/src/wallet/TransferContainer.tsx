import { useState } from "react";
import { MapPin, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";

function TransferInfo() {
  const infoList: { title: string; icon: JSX.Element; description: string }[] =
    [
      {
        title: "Location:",
        icon: <MapPin size={15} />,
        description: "Chong Qing, China",
      },
      {
        title: "Wallet ID:",
        icon: <Wallet size={15} />,
        description: "4d2ca285e64945c7fe88772bb5fda24bhsa",
      },
    ];

  return (
    <div className="h-fit bg-card rounded-2xl px-9 py-5 font-sans">
      <h1 className="font-bold text-lg">Information</h1>
      {infoList.map((info) => (
        <div key={info.title} className="flex gap-2 mt-3">
          <div className="flex gap-2 items-center">
            {info.icon}
            <h5 className="font-semibold whitespace-nowrap">{info.title}</h5>
          </div>
          <p className="break-words w-9/12 overflow-auto">{info.description}</p>
        </div>
      ))}
    </div>
  );
}

function ReceiverInput() {
  return (
    <div>
      <h4 className="font-semibold">Pay to</h4>
      <Input type="text" className="rounded-2xl mt-2 px-5 text-center" />
      <p className="w-full text-center text-sm text-gray-500">
        Please enter the Wallet ID of the Receiver
      </p>
    </div>
  );
}

function AmountInput() {
  const columns: string[] = ["Amount", "Reason"];

  return (
    <div className="grid grid-cols-2 gap-2">
      {columns.map((column) => (
        <div key={column}>
          <h4 className="font-semibold">{column}</h4>
          <Input
            id={column.toLowerCase()}
            type="text"
            className="rounded-2xl mt-2 px-5"
          />
        </div>
      ))}
    </div>
  );
}

function TransferPanelInput() {
  return (
    <div className="grid grid-rows-3 gap-5 mt-10">
      <ReceiverInput />
      <AmountInput />
    </div>
  );
}

function TransferPanel() {
  const [option, setOption] = useState("Send");

  const options: string[] = ["Send", "QR Code"];

  return (
    <div className="h-full bg-card rounded-2xl px-9 py-7 font-sans">
      <h1 className="text-3xl font-bold text-center">Transfer</h1>
      <div className="grid grid-cols-2 mt-7 text-center font-semibold">
        {options.map((opt) => (
          <div
            key={opt}
            className={`cursor-pointer transition-all duration-700 pb-5 border-b-2 ${
              option === opt ? "border-b-purple-700" : ""
            }`}
            onClick={() => setOption(opt)}
          >
            {opt}
          </div>
        ))}
      </div>
      {option === "Send" ? <TransferPanelInput /> : null}
    </div>
  );
}

export default function TransferContainer() {
  return (
    <div className="h-full flex flex-col gap-5 col-span-2">
      <TransferInfo />
      <TransferPanel />
    </div>
  );
}
