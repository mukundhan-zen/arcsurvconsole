"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from 'next/navigation';

const mockSurveyResponse = {
  patientName: "Alice Johnson",
  surveyTitle: "Patient Satisfaction Survey",
  responses: [
    {
      question: "How would you rate the overall quality of care you received?",
      answer: "Excellent",
    },
    {
      question: "Was the staff friendly and helpful?",
      answer: "Yes, everyone was very professional and kind.",
    },
    {
      question: "How long did you wait to be seen by the doctor?",
      answer: "Less than 15 minutes.",
    },
    {
      question: "Are you satisfied with the explanation of your treatment plan?",
      answer: "Yes, the doctor explained everything clearly.",
    },
    {
      question: "Would you recommend our clinic to friends and family?",
      answer: "Definitely.",
    },
  ],
};

export default function PatientResponsePage() {
    const params = useParams();
    const { surveyId, patientId } = params;

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
            <Link href={`/dashboard/surveys/${surveyId}/patients`} className="text-sm font-medium text-primary hover:underline mb-4 block">
                &larr; Back to Patients List
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">{mockSurveyResponse.surveyTitle}</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Viewing responses for: <span className="font-semibold">{mockSurveyResponse.patientName}</span> (ID: {patientId})
            </p>
        </header>

      <Card>
        <CardHeader>
          <CardTitle>Survey Responses</CardTitle>
          <CardDescription>Detailed answers from the patient.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {mockSurveyResponse.responses.map((response, index) => (
            <div key={index} className="space-y-2">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{index + 1}. {response.question}</p>
                <p className="pl-4 text-gray-600 dark:text-gray-400 border-l-2 border-primary ml-2">{response.answer}</p>
                {index < mockSurveyResponse.responses.length - 1 && <Separator className="mt-4" />} 
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}