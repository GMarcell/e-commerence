import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

export default function ProductCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((imgUrl, index) => (
          <CarouselItem key={index}>
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
  );
}
