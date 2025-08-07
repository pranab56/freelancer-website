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
import { Search, FileText, ChevronDown } from "lucide-react";

function OngoingProjects() {
  const projects = [
    {
      id: 1,
      title: "Project 1: CRM System",
      client: "XYZ Corp",
      deadline: "05/2023",
      amount: "$500",
      status: "In Progress",
      statusColor: "bg-blue-600",
    },
    {
      id: 2,
      title: "Project 1: CRM System",
      client: "XYZ Corp",
      deadline: "05/2023",
      amount: "$500",
      status: "Completed",
      statusColor: "bg-blue-600",
    },
  ];

  return (
    <div className="w-full bg-white py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold h2-gradient-text mb-2 leading-relaxed">
          Ongoing Projects
        </h1>
        <p className="text-gray-600">
          Stay on top of your work and ensure smooth collaboration until project
          completion!
        </p>
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

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                {/* Project Info */}
                <div className="flex-1 ">
                  <h3 className="text-xl font-semibold h2-gradient-text mb-3">
                    {project.title}
                  </h3>

                  <div className="space-y-1 text-sm text-gray-700">
                    <p>
                      <span className="font-medium">Client:</span>{" "}
                      {project.client}
                    </p>
                    <p>
                      <span className="font-medium">Deadline:</span>{" "}
                      {project.deadline}
                    </p>
                    <p>
                      <span className="font-medium">Amount:</span>{" "}
                      {project.amount}
                    </p>
                  </div>
                </div>
                <div className=" flex-1 ">
                  <Badge
                    className={`${project.statusColor} text-white hover:${project.statusColor} h-9 px-4 py-1 gradient`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center gap-4 ">
                  <Button className="button-gradient">
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
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

export default OngoingProjects;
