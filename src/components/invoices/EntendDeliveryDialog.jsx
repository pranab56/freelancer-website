import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import useToast from "@/hooks/showToast/ShowToast";
import { useSelector } from "react-redux";

export default function ExtendDeliveryDialog({ isOpen, onClose }) {
  const showToast = useToast();
  const messages = useSelector((state) => state.language.messages);
  const dialogTranslations = React.useMemo(
    () =>
      messages?.invoiceDialogs?.extendDelivery || {
        title: "Select Date & Add Reason",
        dateLabel: "Date",
        datePlaceholder: "Pick a date",
        reasonLabel: "Add Reason",
        reasonPlaceholder: "Enter your reason...",
        submitButton: "Submit",
      },
    [messages]
  );

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [open, setOpen] = React.useState(isOpen);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose();
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      date: null,
      reason: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    showToast.success("Delivery date extended successfully", {
      description: `New delivery date: ${format(data.date, "PPP")}`,
    });
    reset();
    onClose();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{dialogTranslations.title}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Date Picker */}
            <div className="space-y-2">
              <Label>{dialogTranslations.dateLabel}</Label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>{dialogTranslations.datePlaceholder}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>

            {/* Reason Textarea */}
            <div className="space-y-2">
              <Label htmlFor="reason">{dialogTranslations.reasonLabel}</Label>
              <Textarea
                id="reason"
                placeholder={dialogTranslations.reasonPlaceholder}
                {...register("reason", { required: "Reason is required" })}
              />
              {errors.reason && (
                <p className="text-red-500 text-sm">{errors.reason.message}</p>
              )}
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="button-gradient"
                onClick={handleSubmit(onSubmit)}
              >
                {dialogTranslations.submitButton}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
