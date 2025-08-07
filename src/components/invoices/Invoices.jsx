import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, FileText, Plus, Calendar, Truck } from "lucide-react";

function Invoices() {
  const invoices = [
    {
      id: "12345",
      client: "XYZ Corp",
      amount: "$500",
      status: "Pending",
    },
    {
      id: "12345",
      client: "XYZ Corp",
      amount: "$500",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full bg-white py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold h2-gradient-text mb-2">Invoices</h1>
          <p className="text-gray-600 max-w-2xl">
            With our simple invoicing system, managing payments is quick and
            easy for both freelancers and clients. Never miss a payment or
            detail again!
          </p>
        </div>

        <Button className="button-gradient">
          <Plus className="w-4 h-4 mr-2" />
          Create New Invoice
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search" className="pl-10 border-gray-300" />
        </div>

        <Select defaultValue="all-invoice">
          <SelectTrigger className="w-48 border-gray-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-invoice">All Invoice</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Invoices List */}
      <div className="space-y-6">
        {invoices.map((invoice, index) => (
          <Card
            key={index}
            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                {/* Invoice Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold h2-gradient-text mb-3">
                    Invoice #{invoice.id}
                  </h3>
                </div>
                <div className="flex-1 h-9 ">
                  <Badge
                    variant="outline"
                    className=" text-gray-700 gradient px-4 py-1 h-9"
                  >
                    {invoice.status}
                  </Badge>
                </div>

                {/* Status and Main Actions */}
                <div className="flex items-center gap-4">
                  <Button className="button-gradient">
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Client Info and Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Client:</span>{" "}
                    {invoice.client}
                  </p>
                  <p>
                    <span className="font-medium">Amount:</span>{" "}
                    {invoice.amount}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button className="button-gradient">
                    <Calendar className="w-4 h-4 mr-2" />
                    Extend Delivery Date
                  </Button>

                  <Button className="button-gradient">
                    <Truck className="w-4 h-4 mr-2" />
                    Delivery Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Invoices;
