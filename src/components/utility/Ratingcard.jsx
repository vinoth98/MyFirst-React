import React, { useState } from "react";
import {
  MailOpen,
  Save,
  BarChart2Icon,
  ChartNoAxesColumn,
  Download,
  RefreshCcw,
  StarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Ratingcard() {
  const [ratings, setRatings] = useState(Array(5).fill(0));
  const handleRating = (questionIndex, rating) => {
    const newRatings = [...ratings];
    newRatings[questionIndex] = rating;
    setRatings(newRatings);
  };
  const activeStars = Math.max(...ratings, 0);
  return (
    <>
      <div>
        <Accordion type="single" collapsible className="w-full bg-white">
          <AccordionItem value="item-1 text-white" className="mb-3 border">
            <AccordionTrigger
              className="destructive text-white bg-white justify-content flex "
              variant="destructive"
            >
              Decision Makers?
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`me-2 w-4 ${
                      i < activeStars ? "fill-yellow-500 " : "text-yellow-500"
                    }`}
                  />
                ))}

                {/* <StarIcon className="me-2 w-4" />
                <StarIcon className="me-2 w-4" />
                <StarIcon className="me-2 w-4" /> */}
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-2 text-left">
              {ratings.map((rating, qIndex) => (
                <div
                  key={qIndex}
                  className="flex justify-between p-2 items-center"
                >
                  {qIndex + 1}. How well do decision-makers understand and
                  utilize Decision Quality?.
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <PaginationItem
                          key={num}
                          onClick={() => handleRating(qIndex, num)}
                        >
                          <PaginationLink href="#" isActive>
                            {num}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      {/* <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem> */}

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* <div className="flex justify-between p-2 items-center">
                2.How is your Decision Quality culture reflected in leadership
                behavior and development?
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive></PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div> */}

          {/* <div className="flex justify-between p-2 items-center">
                3. How well do decision-makers participate in decision-making
                processes.
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div> */}

          {/* <AccordionItem value="item-2" className="mb-3 border">
              <AccordionTrigger className="destructive text-white bg-white bg">
                Decision Staff?
                <div className="flex">
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-2 text-left">
                <div className="flex justify-between p-2 items-center">
                  1. How well-versed is your organization's decision staff in
                  the principles and concepts of quality decision making?
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
                <div className="flex justify-between p-2 items-center">
                  2. How well does your decision staff demonstrate the
                  leadership skills necessary to lead high quality decision
                  analysis?
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
                <div className="flex justify-between p-2 items-center">
                  3. How well has your decision staff earned the confidence of
                  decision-makers?
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mb-3 border">
              <AccordionTrigger className="destructive text-white bg-white bg">
                Process & Roles?
                <div className="flex">
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-2 text-left">
                <div className="flex justify-between p-2 items-center">
                  Yes. It adheres to the WAI-ARIA design pattern.
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
                <div className="flex justify-between p-2 items-center">
                  Yes. It adheres to the WAI-ARIA design pattern.
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4 " className="mb-3 border">
              <AccordionTrigger className="destructive text-white bg-white bg">
                Culture?
                <div className="flex">
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                  <StarIcon className="me-2 w-4" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-2 text-left">
                <div className="flex justify-between p-2 items-center">
                  How well do decision-makers understand and utilize Decision
                  Quality?.
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
                <div className="flex justify-between p-2 items-center">
                  Yes. It adheres to the WAI-ARIA design pattern.
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
                <div className="flex justify-between p-2 items-center">
                  Yes. It adheres to the WAI-ARIA design pattern.
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </AccordionContent>
            </AccordionItem> */}
        </Accordion>
      </div>

      <div className="flex justify-between">
        <Button variant="destructive" className="p-2 me-2">
          <Save /> Save PDF
        </Button>
        <Button variant="destructive" className="p-2 me-2">
          <ChartNoAxesColumn /> Assessment Summary
        </Button>
        <Button variant="destructive" className="p-2 me-2">
          <Download /> Blank Assessment
        </Button>
        <Button variant="destructive" className="p-2 me-2">
          <RefreshCcw /> Clear All
        </Button>
      </div>
    </>
  );
}

export default Ratingcard;
