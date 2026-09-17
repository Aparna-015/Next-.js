export const user = [
  { id: 1, name: "John" },
  { id: 2, name: "dey" },
  { id: 3, name: "anu" },
];

export async function GET() {
  return Response.json(user);
}