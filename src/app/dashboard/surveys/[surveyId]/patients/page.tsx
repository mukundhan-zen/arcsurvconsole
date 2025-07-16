"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useParams } from 'next/navigation';

const mockPatients = [
  {
    id: "101",
    name: "Alice Johnson",
    status: "Completed",
  },
  {
    id: "102",
    name: "Bob Williams",
    status: "Pending",
  },
  {
    id: "103",
    name: "Charlie Brown",
    status: "In Progress",
  },
  {
    id: "104",
    name: "Diana Miller",
    status: "Completed",
  },
];

export default function PatientsPage() {
  const params = useParams();
  const { surveyId } = params;

  const handleAddPatient = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock action: In a real app, this would handle form submission
    alert("New patient would be added here.");
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Survey Patients</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            A list of patients assigned to Survey ID: {surveyId}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0">Add New Patient</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Patient</DialogTitle>
              <DialogDescription>
                Enter the new patient's details below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddPatient}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="John Doe" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="patient@example.com" className="col-span-3" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Patient</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </header>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mockPatients.map((patient) => (
          <Link href={`/dashboard/surveys/${surveyId}/patients/${patient.id}`} key={patient.id} legacyBehavior passHref>
             <a className="block h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <CardHeader>
                    <CardTitle>{patient.name}</CardTitle>
                    <CardDescription className="pt-2">Status: {patient.status}</CardDescription>
                    </CardHeader>
                </Card>
             </a>
          </Link>
        ))}
      </div>
    </div>
  );
}