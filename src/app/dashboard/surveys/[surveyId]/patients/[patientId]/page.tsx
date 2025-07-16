'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Cell, Pie } from 'recharts';

// Paste your improvementData, doctorLogs, and patientResponses arrays here

export default function PatientSurveyDetailPage() {
  // For demo, use the first patient
  const patient = {
    name: 'John Smith',
    email: 'john.smith@email.com',
    consultationDate: '2024-01-15',
    completed: 12,
    total: 14,
    status: 'Active',
    lastResponse: '2 hours ago',
    regularity: 'Regular',
    improvementTrend: 'Improving'
  };

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

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            {patient.name}
            <Badge variant="secondary">{patient.status}</Badge>
            <Badge variant="outline">{patient.improvementTrend}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-8">
          <div>
            <div className="text-gray-500">Email</div>
            <div>{patient.email}</div>
          </div>
          <div>
            <div className="text-gray-500">Consultation</div>
            <div>{patient.consultationDate}</div>
          </div>
          <div>
            <div className="text-gray-500">Completed</div>
            <div>{patient.completed}/{patient.total}</div>
          </div>
          <div>
            <div className="text-gray-500">Last Response</div>
            <div>{patient.lastResponse}</div>
          </div>
          <div>
            <div className="text-gray-500">Regularity</div>
            <div>{patient.regularity}</div>
          </div>
        </CardContent>
      </Card>

      {/* Improvement Trend Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Improvement Trend</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Replace this with a real chart */}
          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">                       
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { iteration: 1, score: 8.5 },
                  { iteration: 2, score: 8.2 },
                  { iteration: 3, score: 8.0 },
                  { iteration: 4, score: 7.8 },
                  { iteration: 5, score: 7.5 },
                  { iteration: 6, score: 7.2 },
                  { iteration: 7, score: 7.0 },
                  { iteration: 8, score: 6.8 },
                  { iteration: 9, score: 6.5 },
                  { iteration: 10, score: 6.2 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="iteration" />
                  <YAxis domain={[1, 10]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    dot={{ fill: '#f59e0b', r: 4 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Doctor Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Doctor Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {doctorLogs.map((log, idx) => (
              <li key={idx} className="border-l-4 pl-4 border-blue-400">
                <div className="text-xs text-gray-500">{log.date} {log.time}</div>
                <div className="font-semibold">Symptoms: {log.symptoms}</div>
                <div>Consultation: {log.consultation}</div>
                <div>Rating: <Badge variant="secondary">{log.rating}</Badge></div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Patient Responses */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Time</th>
                <th className="text-left">Type</th>
                <th className="text-left">Response</th>
                <th className="text-left">Rating</th>
              </tr>
            </thead>
            <tbody>
              {patientResponses.map((resp, idx) => (
                <tr key={idx} className="border-b">
                  <td>{resp.date}</td>
                  <td>{resp.time}</td>
                  <td>{resp.type}</td>
                  <td>{resp.response}</td>
                  <td>{resp.rating !== null ? resp.rating : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}