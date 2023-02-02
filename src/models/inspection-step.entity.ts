class InspectionStep {
      public title: string;
      public description: string;
      public icon: string;
      public id: number;

      constructor(data: any = {}) {
      this.icon = data.icon || ""
      this.title = data.title || ""
      this.description = data.description || ""
      this.id = data.id || 0
      }
}

export default InspectionStep;