import { user } from "../route";

export async function GET(request, { params }) {
  const { id } = await params;
  const foundUser = user.find((u) => u.id === parseInt(id));
  return Response.json(foundUser);
}