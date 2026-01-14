"use client";

import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useProduct(params.id);

  console.log(data);

  if (data === undefined || isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="w-full relative overflow-hidden py-2">
      <Carousel className="w-full">
        <CarouselContent>
          {data.images.map((imgUrl, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="w-screen">
                <Card className="w-full">
                  <CardContent className="relative aspect-square p-0">
                    <Image
                      src={imgUrl}
                      alt={`${index}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
