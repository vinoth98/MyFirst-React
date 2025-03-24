import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Counter from "../utility/Counter";
import Country from "../utility/Country";
function Dashboard() {
  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      {/* <div className="d-flex" style={{ display: "flex" }}> */}
      <div className="card-wrapper me-3">
        <Card className={cn("w-[250px]", "h-[250px]", "p-4")}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="card-wrapper me-3">
        <Card className={cn("w-[250px]", "h-[250px]", "p-4")}>
          <Counter></Counter>
        </Card>
      </div>
      <div className="card-wrapper me-3">
        <Card className={cn("h-[250px]", "p-4")}>
          <Country></Country>
        </Card>
      </div>
    </div>
  );
}
export default Dashboard;
