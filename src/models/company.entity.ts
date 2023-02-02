import InspectionStep from "./inspection-step.entity";

class Company {
  public logo: string;
  public name: string;
  public steps: InspectionStep[];

  constructor(data: any = {}) {
    this.logo = data.logo || ""
    this.name = data.name || ""
    this.steps = data.steps || []
  }
}

export default Company;