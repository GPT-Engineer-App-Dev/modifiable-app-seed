import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our App</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Begin your journey with us today!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            This is a sample page created using React and shadcn components. 
            Feel free to modify and expand upon this template.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;