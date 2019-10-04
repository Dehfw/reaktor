export interface Ferment {
    id: number;
    name: string;
    stage: string;
    time: string;
    steps?: FermentStep[];
  }

  export interface FermentStep {
    id: number;
    order: number;
    name: string
    // fermentId: string;
    interval: string;
    comment: string;
  }
