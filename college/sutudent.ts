export class Student {
  id: number;
  name: string;

  public remember(knowledge: string) {
    console.log(knowledge);
  }

  public study(subject: string) {
    console.log(`${this.id}student study ${subject}`);
  }
}
