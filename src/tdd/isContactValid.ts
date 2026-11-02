export function isContactValid(c: {
  firstName: string;
  lastName: string;
  accountManagerId: number | null;
}): boolean {
  return (
    c.firstName.trim() !== "" &&
    c.lastName.trim() !== "" &&
    c.accountManagerId != null
  );
}
