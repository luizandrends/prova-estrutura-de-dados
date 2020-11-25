class Tad {
  public birthDate(day: number, month: number, year: number): string {
    const parsedDate = `${day}/${month}/${year}`;

    return parsedDate;
  }

  public returnAge(birthYear: number): number {
    const year = new Date().getFullYear();

    return year - birthYear;
  }

  public createUser(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  public invertUserName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  }
}

export default Tad;
