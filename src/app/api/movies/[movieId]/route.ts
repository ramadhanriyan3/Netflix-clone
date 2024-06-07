import { NextRequest } from "next/server";
import prismadb from "./../../../../../lib/prismadb";

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.pathname.split("/");
  const movieId = pathname[pathname.length - 1];
  try {
    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    return Response.json(movie);
  } catch (err) {
    return Response.json(err, { status: 400 });
  }
}
