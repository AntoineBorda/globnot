import * as React from "react"
import { Carousel } from "@/components/ui/carousel"
import { Comment } from "@/components/ui/comment-section"
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { CalendarClock, Download, Hammer, RefreshCcw, User } from "lucide-react";

interface Block {
    title: string;
    description: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    downloadUrlSbp: string;
    downloadUrlSbpcfg: string;
    downloadCount: number;
    images: string[];
}

interface SatisfactoryBpProps {
    blocks: Block[];
}

const SatisfactoryBp: React.FC<SatisfactoryBpProps> = ({ blocks }) => {
    return (
        <div className="flex flex-wrap justify-center gap-12">
            {blocks.map((block, index) => (
                <div key={index} className="w-[350px]">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            {/* Title */}
                            <CardTitle className="uppercase">
                                <div className="flex items-center justify-start">
                                    <Hammer size={28} className="mr-2 text-secondary" />{block.title}
                                </div>
                            </CardTitle>
                            {/* Description */}
                            <CardDescription>
                                {block.description}
                            </CardDescription>
                            {/* Dates */}
                            <div className="pt-2">
                                <div className="flex items-start justify-start">
                                    <CalendarClock size={18} className="mr-2 text-secondary" />
                                    <span className="text-sm">{block.createdAt}</span>
                                </div>
                                <div className="flex items-start justify-start">
                                    <RefreshCcw size={18} className="mr-2 text-secondary" />
                                    <span className="text-sm">{block.updatedAt}</span>
                                </div>
                            </div>
                            {/* Author */}
                            <div className="flex items-center justify-start">
                                <User className="mr-2 text-secondary" />
                                <span className="font-bold">{block.author}</span>
                            </div>
                            {/* Downloads */}
                            <div className="flex items-center justify-end">
                                <span className="text-xs uppercase">Downloads</span>
                                <Download className="mr-2 ms-2 text-secondary" />
                                <span className="font-bold">{block.downloadCount}12</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <Carousel
                                items={block.images.map((src, imgIndex) => ({
                                    id: imgIndex + 1,
                                    content: (
                                        <img
                                            src={src}
                                            alt={`${block.title} ${imgIndex + 1}`}
                                            className="carousel-image"
                                        />
                                    )
                                }))}
                                autoSlideInterval={0}
                            />
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-center gap-4 mt-auto">
                            <Button variant="default">Download .sbp</Button>
                            <Button variant="neutral">Download .sbpcfg (optional)</Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default SatisfactoryBp