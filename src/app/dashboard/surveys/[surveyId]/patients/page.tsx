'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const patients = [
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john.smith@email.com', 
      consultationDate: '2024-01-15', 
      completed: 12, 
      total: 14, 
      status: 'Active', 
      lastResponse: '2 hours ago',
      regularity: 'Regular',
      improvementTrend: 'Improving'
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      email: 'sarah.johnson@email.com', 
      consultationDate: '2024-01-10', 
      completed: 8, 
      total: 14, 
      status: 'Active', 
      lastResponse: '4 hours ago',
      regularity: 'Regular',
      improvementTrend: 'Stable'
    },
    { 
      id: 3, 
      name: 'Mike Wilson', 
      email: 'mike.wilson@email.com', 
      consultationDate: '2024-01-08', 
      completed: 14, 
      total: 14, 
      status: 'Completed', 
      lastResponse: '1 week ago',
      regularity: 'Regular',
      improvementTrend: 'Cured'
    },
    { 
      id: 4, 
      name: 'Emma Davis', 
      email: 'emma.davis@email.com', 
      consultationDate: '2024-01-12', 
      completed: 6, 
      total: 14, 
      status: 'Active', 
      lastResponse: '1 hour ago',
      regularity: 'Regular',
      improvementTrend: 'Improving'
    },
    { 
      id: 5, 
      name: 'David Brown', 
      email: 'david.brown@email.com', 
      consultationDate: '2024-01-05', 
      completed: 0, 
      total: 14, 
      status: 'Invited', 
      lastResponse: 'Pending',
      regularity: 'N/A',
      improvementTrend: 'N/A'
    }
  ];
 // Non-linear improvement data with realistic fluctuations
  const improvementData = [
    { day: 1, hour: 8, score: 8.5, iteration: 1, date: '2024-01-01' },
    { day: 1, hour: 12, score: 8.2, iteration: 2, date: '2024-01-01' },
    { day: 1, hour: 16, score: 8.0, iteration: 3, date: '2024-01-01' },
    { day: 1, hour: 20, score: 7.8, iteration: 4, date: '2024-01-01' },
    { day: 2, hour: 8, score: 7.5, iteration: 5, date: '2024-01-02' },
    { day: 2, hour: 12, score: 7.2, iteration: 6, date: '2024-01-02' },
    { day: 2, hour: 16, score: 7.0, iteration: 7, date: '2024-01-02' },
    { day: 2, hour: 20, score: 6.8, iteration: 8, date: '2024-01-02' },
    { day: 3, hour: 8, score: 6.5, iteration: 9, date: '2024-01-03' },
    { day: 3, hour: 20, score: 6.2, iteration: 10, date: '2024-01-03' },
    { day: 4, hour: 8, score: 6.0, iteration: 11, date: '2024-01-04' },
    { day: 4, hour: 20, score: 5.8, iteration: 12, date: '2024-01-04' },
    { day: 5, hour: 8, score: 5.5, iteration: 13, date: '2024-01-05' },
    { day: 5, hour: 20, score: 5.2, iteration: 14, date: '2024-01-05' },
    { day: 6, hour: 8, score: 5.0, iteration: 15, date: '2024-01-06' },
    { day: 6, hour: 20, score: 4.8, iteration: 16, date: '2024-01-06' },
    { day: 7, hour: 8, score: 4.5, iteration: 17, date: '2024-01-07' },
    { day: 7, hour: 20, score: 4.2, iteration: 18, date: '2024-01-07' },
    { day: 8, hour: 8, score: 4.0, iteration: 19, date: '2024-01-08' },
    { day: 8, hour: 20, score: 3.8, iteration: 20, date: '2024-01-08' },
    { day: 9, hour: 8, score: 3.5, iteration: 21, date: '2024-01-09' },
    { day: 9, hour: 20, score: 3.2, iteration: 22, date: '2024-01-09' },
    { day: 10, hour: 8, score: 3.0, iteration: 23, date: '2024-01-10' },
    { day: 10, hour: 20, score: 2.8, iteration: 24, date: '2024-01-10' },
    { day: 11, hour: 8, score: 2.5, iteration: 25, date: '2024-01-11' },
    { day: 11, hour: 20, score: 2.2, iteration: 26, date: '2024-01-11' },
    { day: 12, hour: 8, score: 2.0, iteration: 27, date: '2024-01-12' },
    { day: 12, hour: 20, score: 1.8, iteration: 28, date: '2024-01-12' },
    { day: 13, hour: 8, score: 1.5, iteration: 29, date: '2024-01-13' },
    { day: 13, hour: 20, score: 1.2, iteration: 30, date: '2024-01-13' },
    { day: 14, hour: 8, score: 1.0, iteration: 31, date: '2024-01-14' }
  ];

  const doctorLogs = [
    { 
      date: '2024-01-15', 
      time: '10:30 AM', 
      symptoms: 'Significant improvement in plaque thickness. Reduced scaling and erythema on elbows and knees.', 
      consultation: 'Patient showing excellent response to topical corticosteroid therapy. Recommend continuing current regimen with gradual tapering.', 
      rating: 2 
    },
    { 
      date: '2024-01-08', 
      time: '2:15 PM', 
      symptoms: 'Moderate improvement noted. Plaques are less inflamed, some areas showing normal skin texture.', 
      consultation: 'Good adherence to treatment protocol. Consider adding vitamin D analog to current therapy for enhanced results.', 
      rating: 4 
    },
    { 
      date: '2024-01-01', 
      time: '11:00 AM', 
      symptoms: 'Extensive plaque psoriasis involving 15% body surface area. Thick, scaly plaques on extensor surfaces.', 
      consultation: 'Initiated comprehensive treatment plan with topical corticosteroids and moisturizing regimen. Patient educated on proper application technique.', 
      rating: 8 
    }
  ];

  // Hourly patient responses that gradually become daily
  const patientResponses = [
    // Day 1 - Hourly responses
    { date: '2024-01-01', time: '8:00 AM', day: 1, type: 'Application', response: 'Applied topical corticosteroid on affected areas', rating: null },
    { date: '2024-01-01', time: '8:30 AM', day: 1, type: 'Rating', response: 'Skin condition assessment', rating: 8 },
    { date: '2024-01-01', time: '12:00 PM', day: 1, type: 'Application', response: 'Midday application completed', rating: null },
    { date: '2024-01-01', time: '12:30 PM', day: 1, type: 'Rating', response: 'Afternoon condition rating', rating: 8 },
    { date: '2024-01-01', time: '4:00 PM', day: 1, type: 'Application', response: 'Evening application completed', rating: null },
    { date: '2024-01-01', time: '4:30 PM', day: 1, type: 'Rating', response: 'Evening condition rating', rating: 8 },
    { date: '2024-01-01', time: '8:00 PM', day: 1, type: 'Application', response: 'Night application completed', rating: null },
    { date: '2024-01-01', time: '8:30 PM', day: 1, type: 'Rating', response: 'Night condition rating', rating: 8 },
    
    // Day 2 - Hourly responses
    { date: '2024-01-02', time: '8:00 AM', day: 2, type: 'Application', response: 'Morning application - slight improvement noted', rating: null },
    { date: '2024-01-02', time: '8:30 AM', day: 2, type: 'Rating', response: 'Morning condition assessment', rating: 7 },
    { date: '2024-01-02', time: '12:00 PM', day: 2, type: 'Application', response: 'Midday application completed', rating: null },
    { date: '2024-01-02', time: '12:30 PM', day: 2, type: 'Rating', response: 'Afternoon condition rating', rating: 7 },
    { date: '2024-01-02', time: '4:00 PM', day: 2, type: 'Application', response: 'Evening application completed', rating: null },
    { date: '2024-01-02', time: '4:30 PM', day: 2, type: 'Rating', response: 'Evening condition rating', rating: 7 },
    { date: '2024-01-02', time: '8:00 PM', day: 2, type: 'Application', response: 'Night application completed', rating: null },
    { date: '2024-01-02', time: '8:30 PM', day: 2, type: 'Rating', response: 'Night condition rating', rating: 7 },
    
    // Day 3 - Twice daily
    { date: '2024-01-03', time: '8:00 AM', day: 3, type: 'Application', response: 'Morning application - scaling reduced', rating: null },
    { date: '2024-01-03', time: '8:30 AM', day: 3, type: 'Rating', response: 'Morning condition assessment', rating: 6 },
    { date: '2024-01-03', time: '8:00 PM', day: 3, type: 'Application', response: 'Evening application completed', rating: null },
    { date: '2024-01-03', time: '8:30 PM', day: 3, type: 'Rating', response: 'Evening condition rating', rating: 6 },
    
    // Day 4 - Twice daily
    { date: '2024-01-04', time: '8:00 AM', day: 4, type: 'Application', response: 'Morning application - redness decreasing', rating: null },
    { date: '2024-01-04', time: '8:30 AM', day: 4, type: 'Rating', response: 'Morning condition assessment', rating: 6 },
    { date: '2024-01-04', time: '8:00 PM', day: 4, type: 'Application', response: 'Evening application completed', rating: null },
    { date: '2024-01-04', time: '8:30 PM', day: 4, type: 'Rating', response: 'Evening condition rating', rating: 5 },
    
    // Days 5-14 - Daily responses
    { date: '2024-01-05', time: '8:00 AM', day: 5, type: 'Application', response: 'Daily application - significant improvement', rating: null },
    { date: '2024-01-05', time: '8:30 AM', day: 5, type: 'Rating', response: 'Daily condition assessment', rating: 5 },
    { date: '2024-01-06', time: '8:00 AM', day: 6, type: 'Application', response: 'Daily application - plaques flattening', rating: null },
    { date: '2024-01-06', time: '8:30 AM', day: 6, type: 'Rating', response: 'Daily condition assessment', rating: 5 },
    { date: '2024-01-07', time: '8:00 AM', day: 7, type: 'Application', response: 'Daily application - itching reduced', rating: null },
    { date: '2024-01-07', time: '8:30 AM', day: 7, type: 'Rating', response: 'Daily condition assessment', rating: 4 },
    { date: '2024-01-08', time: '8:00 AM', day: 8, type: 'Application', response: 'Daily application - skin texture improving', rating: null },
    { date: '2024-01-08', time: '8:30 AM', day: 8, type: 'Rating', response: 'Daily condition assessment', rating: 4 },
    { date: '2024-01-09', time: '8:00 AM', day: 9, type: 'Application', response: 'Daily application - minimal scaling', rating: null },
    { date: '2024-01-09', time: '8:30 AM', day: 9, type: 'Rating', response: 'Daily condition assessment', rating: 3 },
    { date: '2024-01-10', time: '8:00 AM', day: 10, type: 'Application', response: 'Daily application - excellent progress', rating: null },
    { date: '2024-01-10', time: '8:30 AM', day: 10, type: 'Rating', response: 'Daily condition assessment', rating: 3 },
    { date: '2024-01-11', time: '8:00 AM', day: 11, type: 'Application', response: 'Daily application - skin almost normal', rating: null },
    { date: '2024-01-11', time: '8:30 AM', day: 11, type: 'Rating', response: 'Daily condition assessment', rating: 2 },
    { date: '2024-01-12', time: '8:00 AM', day: 12, type: 'Application', response: 'Daily application - minimal residual signs', rating: null },
    { date: '2024-01-12', time: '8:30 AM', day: 12, type: 'Rating', response: 'Daily condition assessment', rating: 2 },
    { date: '2024-01-13', time: '8:00 AM', day: 13, type: 'Application', response: 'Daily application - near complete clearance', rating: null },
    { date: '2024-01-13', time: '8:30 AM', day: 13, type: 'Rating', response: 'Daily condition assessment', rating: 1 },
    { date: '2024-01-14', time: '8:00 AM', day: 14, type: 'Application', response: 'Daily application - treatment complete', rating: null },
    { date: '2024-01-14', time: '8:30 AM', day: 14, type: 'Rating', response: 'Final condition assessment', rating: 1 }
  ];


export default function PatientsListPage() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patients Assigned</h1>
        <Button>Add New Patient</Button>
      </div>
      <div className="grid gap-4">
        {patients.map((p) => (
          <Card key={p.id} className="hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push(`/dashboard/surveys/1/patients/${p.id}`)}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{p.name}</CardTitle>
              <Badge variant={p.status === 'Completed' ? "success" : p.status === 'Invited' ? "default" : "secondary"}>
                {p.status}
              </Badge>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-gray-500">Email</div>
                <div>{p.email}</div>
              </div>
              <div>
                <div className="text-gray-500">Consultation</div>
                <div>{p.consultationDate}</div>
              </div>
              <div>
                <div className="text-gray-500">Completed</div>
                <div>{p.completed}/{p.total}</div>
              </div>
              <div>
                <div className="text-gray-500">Last Response</div>
                <div>{p.lastResponse}</div>
              </div>
              <div>
                <div className="text-gray-500">Trend</div>
                <div>{p.improvementTrend}</div>
              </div>
              <div>
                <div className="text-gray-500">Regularity</div>
                <div>{p.regularity}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}