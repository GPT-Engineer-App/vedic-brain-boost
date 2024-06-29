import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Vedic Math Brain Development</h1>
        <Tabs defaultValue="exercises" className="w-full">
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger value="exercises">Brain Exercises</TabsTrigger>
            <TabsTrigger value="mnemonics">Mnemonic Science</TabsTrigger>
          </TabsList>
          <TabsContent value="exercises">
            <Accordion type="single" collapsible>
              <AccordionItem value="exercise-1">
                <AccordionTrigger>Exercise 1: Mental Addition</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>Mental Addition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Practice adding numbers mentally to improve your calculation speed and accuracy.</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exercise-2">
                <AccordionTrigger>Exercise 2: Multiplication Tricks</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>Multiplication Tricks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Learn and practice Vedic multiplication techniques to enhance your multiplication skills.</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="mnemonics">
            <Accordion type="single" collapsible>
              <AccordionItem value="mnemonic-1">
                <AccordionTrigger>Mnemonic 1: Number Rhymes</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>Number Rhymes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Use rhymes to remember numbers and sequences easily.</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mnemonic-2">
                <AccordionTrigger>Mnemonic 2: Visualization Techniques</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>Visualization Techniques</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Employ visualization methods to enhance memory retention and recall.</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;