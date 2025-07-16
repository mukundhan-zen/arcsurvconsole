"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const mockSurveys = [
  {
    id: "1",
    title: "Patient Satisfaction Survey",
    description: "Measures patient satisfaction with the care received.",
  },
  {
    id: "2",
    title: "Post-Operative Follow-Up",
    description: "Tracks recovery progress and complications after surgery.",
  },
  {
    id: "3",
    title: "Mental Health Check-in",
    description: "A brief screening for common mental health conditions.",
  },
  {
    id: "4",
    title: "Annual Wellness Assessment",
    description: "A comprehensive health review for preventive care.",
  },
];

export default function SurveysPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Available Surveys</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Select a survey to view patient data and insights.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockSurveys.map((survey) => (
          <Link href={`/dashboard/surveys/${survey.id}/patients`} key={survey.id} legacyBehavior passHref>
            <a className="block h-full">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <CardHeader>
                  <CardTitle>{survey.title}</CardTitle>
                  <CardDescription className="pt-2">{survey.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}