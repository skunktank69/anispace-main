"use client";

import { createRoot } from "react-dom/client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

/*eslint-disable*/
let root: any = null;
let alerts: Array<{ id: number; message: string }> = [];

export function showAlert(message = "Something went wrong") {
  let container = document.getElementById("fancy-alert-slot");

  if (!container) {
    container = document.createElement("div");
    container.id = "fancy-alert-slot";
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.right = "20px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.zIndex = "999999";
    document.body.appendChild(container);

    root = createRoot(container);
  }

  const id = Date.now();
  alerts.push({ id, message });

  const render = () =>
    root.render(
      alerts.map((a) => (
        <Alert key={`${a.id}-${a.message.split(" ")[1]}`}>
          <CheckCircle2Icon stroke={"#ff0000"} />
          <AlertTitle className="text-red-500">Error</AlertTitle>
          <AlertDescription>{a.message}</AlertDescription>
        </Alert>
      )),
    );

  render();

  // remove after 3s
  setTimeout(() => {
    alerts = alerts.filter((a) => a.id !== id);
    render();
  }, 3000);
}
