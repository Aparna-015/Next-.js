export const user = [
  { id: 1, name: "John" },
  { id: 2, name: "dey" },
];

export async function GET() {
  return Response.json(user);
}
