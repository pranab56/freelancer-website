import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { currentLanguage } from "../../../redux/features/languageSlice";

function ServiceCard() {
  const messages = useSelector((state) => state.language.messages);
  const serviceCardTranslations = messages?.home?.services?.serviceCard || {};
  const language = useSelector(currentLanguage);
  return (
    <Card className="max-w-sm border-none bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <Image src="/services/card.png" alt="card" width={400} height={400} />
      </CardHeader>

      <CardContent className="space-y-3">
        <div
          className={`flex items-center justify-between ${
            language === "fr" ? "items-end" : ""
          }`}
        >
          <div
            className={`flex items-center space-x-3 ${
              language === "fr" ? "flex flex-col items-start" : ""
            }`}
          >
            <Avatar>
              <AvatarImage src="/services/avatar.png" />
              <AvatarFallback>OR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Olivia Rhye</p>
              <p className="text-xs text-muted-foreground">20 Jan 2022</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              {serviceCardTranslations.jobCompleted?.replace("{count}", "30") ||
                "Job Completed: 30"}
            </p>
            <p className="text-normal h2-gradient-text font-bold">
              {serviceCardTranslations.dailyRate?.replace("${amount}", "50") ||
                "Daily Rate: $50"}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium h2-gradient-text">
            UI/UX Designer
          </h4>
          <p className="text-lg text-black font-semibold ">
            UX review presentations
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          I will do ui ux design for saas, web app, dashboard in figma
        </p>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button className="button-gradient">
          {serviceCardTranslations.hireButton || "Hire Freelancer →"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
