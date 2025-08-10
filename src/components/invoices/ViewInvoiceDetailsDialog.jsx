"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ViewInvoiceDetailsDialog({
  isOpen,
  onClose,
  invoiceData = null,
}) {
  // Default invoice data if none provided
  const defaultInvoiceData = {
    clientName: "s. jean",
    serviceType: "graphic",
    projectName: "Project 1: CRM System",
    workingDay: "5",
    totalAmount: "$250",
    status: "Pending",
  };

  const invoice = invoiceData || defaultInvoiceData;

  const handleDone = () => {
    onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-blue-600 h2-gradient-text">
            Invoice Details
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Invoice Details Card */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h3 className="text-lg font-semibold mb-4 h2-gradient-text">
              Invoice Details
            </h3>

            <div className="space-y-3">
              {/* Client Name */}
              <div className="flex items-start">
                <span className="font-medium text-gray-900 min-w-[120px]">
                  Client Name:
                </span>
                <span className="text-gray-700 ml-2">{invoice.clientName}</span>
              </div>

              {/* Service Type */}
              <div className="flex items-start">
                <span className="font-medium text-gray-900 min-w-[120px]">
                  Service Type:
                </span>
                <span className="text-gray-700 ml-2">
                  {invoice.serviceType}
                </span>
              </div>

              {/* Project Name */}
              <div className="flex items-start">
                <span className="font-medium text-gray-900 min-w-[120px]">
                  Project Name:
                </span>
                <span className="text-gray-700 ml-2">
                  {invoice.projectName}
                </span>
              </div>

              {/* Working Day */}
              <div className="flex items-start">
                <span className="font-medium text-gray-900 min-w-[120px]">
                  Working Day:
                </span>
                <span className="text-gray-700 ml-2">{invoice.workingDay}</span>
              </div>

              {/* Total Amount */}
              <div className="flex items-start">
                <span className="font-medium text-gray-900 min-w-[120px]">
                  Total Amount:
                </span>
                <span className="text-gray-700 ml-2 font-semibold">
                  {invoice.totalAmount}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-start">
                <span className="font-medium text-gray-900 min-w-[120px]">
                  Status:
                </span>
                <span
                  className={`ml-2 px-2 py-1 rounded-md text-sm font-medium ${
                    invoice.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : invoice.status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : invoice.status === "Overdue"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex justify-end px-6 py-4 bg-gray-50 border-t border-gray-100">
          <Button
            onClick={handleDone}
            className="px-8 button-gradient py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
