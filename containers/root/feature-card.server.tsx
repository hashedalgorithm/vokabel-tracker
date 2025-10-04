import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const FeatureCard = ({ Icon, description, title }: FeatureCardProps) => {
  return (
    <Card className="border-2 hover:border-primary transition-colors min-w-96 max-w-96">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
