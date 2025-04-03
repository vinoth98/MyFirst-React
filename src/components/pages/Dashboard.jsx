import React from "react";
// import { Button } from "@/components/ui/button";
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
import Layout from "./Layout";
import Country from "../utility/Country";
import Navbar from "./Navbar";
import SearchCommand from "../utility/SearchCommand";
import Ratingcard from "../utility/Ratingcard";
//import { Layout } from "lucide-react";
function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <Layout></Layout>
      </div>
      <div className="flex flex-col">
        <div className="flex space-x-4 rounded-md  p-4 flex-wrap">
          {/* <div className="d-flex" style={{ display: "flex" }}> */}
          <div className="card-wrapper me-3 mb-4">
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
          <div className="card-wrapper me-3 mb-4">
            <Card className={cn("w-[250px]", "h-[250px]", "p-4")}>
              <Counter></Counter>
            </Card>
          </div>
          <div className="card-wrapper me-3 mb-4">
            <Card className={cn("h-[250px]", "p-4")}>
              <Country></Country>
            </Card>
          </div>
          <div className="card-wrapper me-3 mb-4">
            <Card className={cn("w-[285px]", "h-[300px]", "p-4")}>
              <SearchCommand></SearchCommand>
            </Card>
          </div>
          <div className="card-wrapper me-3 mb-2">
            <Card className={cn("w-[800px]", "h-[100%]", "p-4")}>
              <Ratingcard></Ratingcard>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
