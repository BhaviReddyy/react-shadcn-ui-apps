import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ImageSlideshow() {
  const images = [
    "https://picsum.photos/seed/1/400",
    "https://picsum.photos/seed/2/400",
    "https://picsum.photos/seed/3/400"
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="p-6 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Image Slideshow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <img src={images[index]} alt="slide" className="rounded" />

          <div className="flex justify-between">
            <Button onClick={prev}>Previous</Button>
            <Button onClick={next}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
