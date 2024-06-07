import { without } from "lodash";
import { getUserSession } from "../../../../lib/userSession";
import prismadb from "../../../../lib/prismadb";

export async function POST(req: Request) {
  const user = await getUserSession();
  const email = user?.email;
  const { movieId } = await req.json();
  const sanitizedEmail: string | undefined = email ?? undefined;

  try {
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const user = await prismadb.user.update({
      where: {
        email: sanitizedEmail,
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return Response.json(user, { status: 200 });
  } catch (err) {
    Response.json(err, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  const user = await getUserSession();
  const email = user?.email;
  const { movieId } = await req.json();
  const sanitizedEmail: string | undefined = email ?? undefined;

  try {
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }
    const userData = await prismadb.user.findUnique({
      where: {
        email: sanitizedEmail,
      },
    });
    const updatedFavoriteIds = without(userData?.favoriteIds, movieId);
    const updatedUser = await prismadb.user.update({
      where: {
        email: sanitizedEmail,
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return Response.json(updatedUser, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 400 });
  }
}

export async function GET() {
  const user = await getUserSession();
  const email = user?.email;
  const sanitizedEmail: string | undefined = email ?? undefined;

  try {
    const userData = await prismadb.user.findUnique({
      where: {
        email: sanitizedEmail,
      },
    });

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: userData?.favoriteIds,
        },
      },
    });

    return Response.json(favoriteMovies, { status: 200 });
  } catch (err) {
    Response.json(err, { status: 400 });
  }
}
