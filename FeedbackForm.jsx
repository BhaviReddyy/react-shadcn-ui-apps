import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="p-6 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input 
            placeholder="Name" 
            name="name" 
            value={form.name} 
            onChange={handleChange}
          />
          <Input 
            placeholder="Email" 
            name="email" 
            value={form.email} 
            onChange={handleChange}
          />
          <Textarea 
            placeholder="Your Feedback..." 
            name="feedback" 
            value={form.feedback} 
            onChange={handleChange}
          />

          <Button onClick={handleSubmit}>Submit</Button>

          {submitted && (
            <div className="mt-4 p-4 border rounded">
              <h3 className="font-bold">Submitted Data:</h3>
              <p><b>Name:</b> {submitted.name}</p>
              <p><b>Email:</b> {submitted.email}</p>
              <p><b>Feedback:</b> {submitted.feedback}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
