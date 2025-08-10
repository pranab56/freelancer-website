"use client";
import React, { useState } from "react";
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
import CreateInvoicesDialog from "./CreateInvoicesDialog";
import ViewInvoiceDetailsDialog from "./ViewInvoiceDetailsDialog";
import ProjectCompleteDialog from "./ProjectCompleteDialog";

function Invoices() {
  const [isCreateInvoicesDialogOpen, setIsCreateInvoicesDialogOpen] =
    useState(false);
  const [isViewInvoiceDetailsDialogOpen, setIsViewInvoiceDetailsDialogOpen] =
    useState(false);
  const [isProjectCompleteDialogOpen, setIsProjectCompleteDialogOpen] =
    useState(false);
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
    <div className="w-full bg-white py-4 md:py-6 max-w-7xl mx-auto px-4 md:px-6 2xl:px-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold h2-gradient-text mb-2">
            Invoices
          </h1>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            With our simple invoicing system, managing payments is quick and
            easy for both freelancers and clients. Never miss a payment or
            detail again!
          </p>
        </div>

        <Button
          className="button-gradient cursor-pointer w-full md:w-auto"
          onClick={() => setIsCreateInvoicesDialogOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New Invoice
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search" className="pl-10 border-gray-300" />
        </div>

        <Select defaultValue="all-invoice">
          <SelectTrigger className="w-full md:w-48 border-gray-300">
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
      <div className="space-y-4 md:space-y-6">
        {invoices.map((invoice, index) => (
          <Card
            key={index}
            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4 md:p-6">
              {/* Mobile: Stacked Layout */}
              <div className="md:hidden space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold h2-gradient-text">
                    Invoice #{invoice.id}
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-gray-700 gradient px-3 py-1"
                  >
                    {invoice.status}
                  </Badge>
                </div>

                {/* Client Info */}
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

                {/* Action Buttons - Stacked */}
                <div className="space-y-2">
                  <Button
                    className="button-gradient w-full"
                    onClick={() => setIsViewInvoiceDetailsDialogOpen(true)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>

                  <Button className="button-gradient w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Extend Delivery Date
                  </Button>

                  <Button
                    className="button-gradient w-full"
                    onClick={() => setIsProjectCompleteDialogOpen(true)}
                  >
                    <Truck className="w-4 h-4 mr-2" />
                    Delivery Now
                  </Button>
                </div>
              </div>

              {/* Desktop: Original Layout */}
              <div className="hidden md:block">
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
                    <Button
                      className="button-gradient"
                      onClick={() => setIsViewInvoiceDetailsDialogOpen(true)}
                    >
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

                    <Button
                      className="button-gradient"
                      onClick={() => setIsProjectCompleteDialogOpen(true)}
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      Delivery Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Invoices Dialog */}
      {isCreateInvoicesDialogOpen && (
        <CreateInvoicesDialog
          isOpen={isCreateInvoicesDialogOpen}
          onClose={() => setIsCreateInvoicesDialogOpen(false)}
        />
      )}

      {/* View Invoice Details Dialog */}
      {isViewInvoiceDetailsDialogOpen && (
        <ViewInvoiceDetailsDialog
          isOpen={isViewInvoiceDetailsDialogOpen}
          onClose={() => setIsViewInvoiceDetailsDialogOpen(false)}
        />
      )}

      {/* Project Complete Dialog */}
      {isProjectCompleteDialogOpen && (
        <ProjectCompleteDialog
          isOpen={isProjectCompleteDialogOpen}
          onClose={() => setIsProjectCompleteDialogOpen(false)}
        />
      )}
    </div>
  );
}

export default Invoices;
