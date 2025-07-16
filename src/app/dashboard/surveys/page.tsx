'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

const survey = {
  id: 1,
  name: 'Psoriasis Care Survey',
  patients: 28,
  dateCreated: '2023-10-10',
  type: 'MSL',
  active: 22,
  completed: 5,
  invited: 1,
  skipped: 0
};

export default function SurveyListPage() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Surveys</h1>
      <Card className="hover:shadow-lg cursor-pointer transition"
        onClick={() => router.push(`/dashboard/surveys/${survey.id}/patients`)}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            {survey.name}
            <Badge variant="outline">{survey.type}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div>
              <div className="text-sm text-gray-500">Created</div>
              <div>{survey.dateCreated}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Patients</div>
              <div>{survey.patients}</div>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">Active: {survey.active}</Badge>
              <Badge variant="success">Completed: {survey.completed}</Badge>
              <Badge variant="default">Invited: {survey.invited}</Badge>
              <Badge variant="destructive">Skipped: {survey.skipped}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}