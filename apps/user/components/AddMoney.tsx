"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/input";
import { useState } from "react";

const SUPPORT_BANKS = [{
  name: "AXIS BANK",
  redirectUrl: "https://netbanking.axisbank.com"
}, {
  name: "HDFC BANK",
  redirectUrl: "https://www.hdfcbank.com"
}];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORT_BANKS[0]?.redirectUrl);
  return <Card title="Add Money">
    <div className="w-full">
      <TextInput label={"Amount"} placeholder="Amount" onChange={() => { }} />
      <div className="py-4 text-left">Bank</div>
      <Select onSelect={(value) => {
        setRedirectUrl(SUPPORT_BANKS.find(x => x.name === value)?.redirectUrl || "")
      }} options={SUPPORT_BANKS.map(x => ({
        key: x.name,
        value: x.name
      }))} />
      <div className="flex justify-center pt-4">
        <Button onClick={() => {
          window.location.href = redirectUrl || ""
        }}>
          Add Money
        </Button>
      </div>
    </div>
  </Card>
}