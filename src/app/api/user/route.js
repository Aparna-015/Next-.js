export const user = [
  { id: 1, name: "John" },
  { id: 2, name: "dey" },
];

export async function GET() {
  return Response.json(user);
}
// 2. POST Method: Receives new data and adds it to our array
export async function POST(request) {
  try {
    // Step A: Extract the JSON body sent from the client
    const body = await request.json();
    console.log("........", body); // Log the received data for debugging
    // Step B: Create a new user object using the data
    const newUser = {
      id: user.length + 1, // Simple ID generator
      name: body.name      // Assuming the client sends { "name": "Aparna" }
    };

    // Step C: Push the new user into our array
    user.push(newUser);

    // Step D: Send a success response back to the client
    return Response.json({
      message: "User added successfully!",
      createdUser: newUser,
      allUsers: user
    }, { status: 201 }); // 201 Created status code

  } catch (error) {
    // Handle errors if the user didn't send valid JSON
    return Response.json({ error: "Invalid JSON data received" }, { status: 400 });
  }
}