export class AjaxHeaders {
  private values = {};
  constructor(name: string, value: string) {
    this.values[name] = value;
  }

  public toObject(): { [key: string]: string } {
    return this.values;
  }
  public append(name: string, value: string) {
    this.values[name] = value;
  }
}
