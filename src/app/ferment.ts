export class Ferment {
    id: number;
    name: string;
    stage: string;
    time: string;
  }

  export class FermentStep {
    id: number;
    order: number;
    name: string
    // fermentId: string;
    interval: string;
    comment: string;
  }