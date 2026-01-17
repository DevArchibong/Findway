import { CheckCircle2 } from "lucide-react";

interface StepsListProps {
  steps: string[];
}

export function StepsList({ steps }: StepsListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex gap-4 animate-slide-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {index + 1}
          </div>
          <div className="flex-1 pt-1">
            <p className="text-foreground leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
      <div
        className="flex gap-4 pt-2 animate-slide-up"
        style={{ animationDelay: `${steps.length * 50}ms` }}
      >
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
        </div>
        <div className="flex-1 pt-1">
          <p className="font-medium text-foreground">You have arrived!</p>
        </div>
      </div>
    </div>
  );
}
